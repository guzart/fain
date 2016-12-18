
const crypto = require('crypto');
// const debug = require('debug')('fain');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Adapter = require('@frctl/fractal').Adapter;
const fs = require('fs');
const beautify = require('js-beautify').html;
const os = require('os');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const vm = require('vm');
const webpack = require('webpack');

const componentCache = {};

const context = path.resolve(path.join(__dirname, '..'));
const ownNodeModules = path.resolve(path.join(context, 'node_modules'));

// TODO: add random suffix
const basePath = path.join(os.tmpdir(), 'frctl-react-adapter');
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}

const config = {
  context,

  entry: path.join(basePath, 'entry.js'),

  output: {
    filename: 'output.js',
    library: 'Component',
    libraryTarget: 'this',
    path: basePath
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel',
          options: {
            babelrc: false,
            presets: [
              require.resolve('babel-preset-react'),
              require.resolve('babel-preset-latest')
            ],
            plugins: [
              require.resolve('babel-plugin-transform-object-rest-spread')
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          loader: ['css?modules&camelCase&sourceMap', 'sass?sourceMap'],
          fallbackLoader: 'style'
        })
      }
    ]
  },

  resolve: {
    modules: ['node_modules'].concat([ownNodeModules]),
    extensions: ['.js', '.json', '.jsx']
  },

  resolveLoader: {
    modules: [ownNodeModules, 'node_modules'],
    moduleExtensions: ['-loader']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new ExtractTextPlugin('styles.css')
  ],

  externals: {
    react: 'React'
  },

  target: 'node'
};

function updateAbsoluteImports(templatePath, code) {
  const dirname = path.dirname(templatePath);
  return code.replace(
    /(from\s+)['"](\..+)['"](.+)$/mg,
    (match, start, impPath, end) => {
      const absPath = path.resolve(dirname, impPath);
      return `${start}'${absPath}'${end}`;
    }
  );
}

function writeEntry(templatePath, code) {
  const inputFilename = config.entry;
  const entryCode = updateAbsoluteImports(templatePath, code);
  fs.writeFileSync(inputFilename, entryCode);
}

const outputFilename = path.join(config.output.path, config.output.filename);
const styleFilename = path.join(config.output.path, 'styles.css');

function render(Component, props) {
  const element = React.createElement(Component, props);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  const style = fs.readFileSync(styleFilename);
  return `<style>${style}</style>\n${beautify(html)}`;
}

function getHashKey(templatePath, templateCode) {
  const hash = crypto.createHash('sha256');
  hash.update(`${templatePath}${templateCode}`);
  return hash.digest('base64');
}

function getCachedComponent(templatePath, templateCode) {
  const hashKey = getHashKey(templatePath, templateCode);
  return componentCache[hashKey];
}

function setCachedComponent(templatePath, templateCode, Component) {
  const hashKey = getHashKey(templatePath, templateCode);
  componentCache[hashKey] = Component;
}

function compileTemplate(compiler, props, templatePath, templateCode) {
  return new Promise((resolve, reject) => {
    writeEntry(templatePath, templateCode);
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
        return;
      }

      const statsData = stats.toJson();
      if (statsData.errors.length > 0) {
        reject(statsData.errors[0]);
        return;
      }

      const scriptGlobal = {
        React,
        process: { env: 'production' },
        window: { navigator: { userAgent: 'Node' } }
      };
      const scriptContext = vm.createContext(scriptGlobal);

      const content = fs.readFileSync(outputFilename);
      (new vm.Script(content)).runInContext(scriptContext);
      const Component = scriptGlobal.Component.default;
      setCachedComponent(templatePath, templateCode, Component);
      resolve(render(Component, props));
    });
  });
}

class ReactAdapter extends Adapter {
  constructor(engineName, instance, source, app) {
    super(instance, source);
    this.app = app;
    this.compiler = webpack(config);
  }

  render(tplPath, tplCode, tplContext, meta) {
    const props = Object.assign({}, { path: tplPath }, meta, tplContext);
    const Component = getCachedComponent(tplPath, tplCode);
    if (Component) {
      return Promise.resolve(render(Component, props));
    }

    return compileTemplate(this.compiler, props, tplPath, tplCode);
  }
}

module.exports = function reactAdapter(engineName, instance) {
  return {
    register(source, app) {
      return new ReactAdapter(engineName, instance, source, app);
    }
  };
};
