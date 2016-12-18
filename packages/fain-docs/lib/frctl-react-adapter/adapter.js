const babel = require('babel-core');
const crypto = require('crypto');
// const beautify = require('js-beautify').html;
const debug = require('debug')('fain');
const Adapter = require('@frctl/fractal').Adapter;
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const vm = require('vm');


const processSass = require('./processSass');
const babelOptions = {
  babelrc: false,
  plugins: [
    [require.resolve('babel-plugin-css-modules-transform'), {
      camelCase: true,
      extractCss: {
        dir: path.resolve(__dirname, '..', '..', 'public'),
        filename: '[path]/[name].css',
        relativeRoot: '../fain/'
      },
      extensions: ['.scss'],
      preprocessCss: processSass
    }]
  ],
  presets: [
    require.resolve('babel-preset-env'),
    require.resolve('babel-preset-react')
  ]
};

function compile(code) {
  const result = babel.transform(code, babelOptions);
  return result.code;
}

function getSandbox() {
  return {
    exports: {},
    process: { env: 'production' },
    require,
    window: { navigator: { userAgent: 'Node' } }
  };
}

function getHashKey(templatePath, templateCode) {
  const hash = crypto.createHash('sha256');
  hash.update(`${templatePath}${templateCode}`);
  return hash.digest('base64');
}

class ReactAdapter extends Adapter {
  constructor(engineName, instance, source, app) {
    super(instance, source);
    this.app = app;
    this.cache = {};
  }

  getCachedComponent(tplPath, tplCode) {
    const hashKey = getHashKey(tplPath, tplCode);
    const Component = this.cache[hashKey];
    if (Component) {
      return Component;
    }

    const sandbox = getSandbox();
    vm.runInNewContext(`${compile(tplCode)}`, sandbox);
    return sandbox.exports.default;
  }

  render(tplPath, tplCode, tplContext, meta) {
    debug(`fractal adapter: rendering ${tplPath}`);

    try {
      const Component = this.getCachedComponent(tplPath, tplCode);
      const props = Object.assign({}, { filePath: tplPath }, meta, tplContext);
      const element = React.createElement(Component, props);
      const html = ReactDOMServer.renderToStaticMarkup(element);
      return Promise.resolve(html);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
}

module.exports = ReactAdapter;
