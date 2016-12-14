
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

// const fs = new webpack.MemoryOutputFileSystem();

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
              require.resolve('babel-preset-es2017')
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          loader: ['css?modules&sourceMap', 'sass?sourceMap'],
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
    React: 'React'
  },

  target: 'node'
};

const inputFilename = config.entry;
const outputFilename = path.join(config.output.path, config.output.filename);
const styleFilename = path.join(config.output.path, 'styles.css');

class ReactAdapter extends Adapter {
  constructor(engineName, instance, source, app) {
    super(instance, source);
    this.app = app;
    this.compiler = webpack(config);
    // this.compiler.inputFileSystem = fs;
    // this.compiler.outputFileSystem = fs;
  }

  render(tplPath, tplCode, tplContext, meta) {
    const props = Object.assign({}, { path: tplPath }, meta, tplContext);
    const tplDir = path.dirname(tplPath);
    const code = tplCode.replace(
      /(from\s+)['"](\..+)['"](.+)$/mg,
      (match, start, impPath, end) => {
        const absPath = path.resolve(tplDir, impPath);
        return `${start}'${absPath}'${end}`;
      }
    );
    fs.writeFileSync(inputFilename, code);

    return new Promise((resolve, reject) => {
      this.compiler.run((error, stats) => {
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
          window: { navigator: { userAgent: 'chrome' } }
        };
        const scriptContext = vm.createContext(scriptGlobal);

        const content = fs.readFileSync(outputFilename);
        const script = new vm.Script(content);
        script.runInContext(scriptContext);
        const element = React.createElement(scriptGlobal.Component.default, props);
        const html = ReactDOMServer.renderToStaticMarkup(element);

        // const style = fs.readFileSync(styleFilename);
        // html = beautify(html, { indent_inner_html: true, brace_style: 'expand' });

        resolve(beautify(html));
      });
    });
  }
}

module.exports = function reactAdapter(engineName, instance) {
  return {
    register(source, app) {
      return new ReactAdapter(engineName, instance, source, app);
    }
  };
};
