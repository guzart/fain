const babel = require('babel-core');
const crypto = require('crypto');
const debug = require('debug')('fain:frctl-react-adapter');
const Adapter = require('@frctl/fractal').Adapter;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const vm = require('vm');

const processSass = require('./processSass');
const { cleanFilepath } = require('./utils');

// * Add a comment with the hashkey to help the preview layout remove dups

let componentStyle = '';
const babelOptions = {
  babelrc: false,
  plugins: [
    [require.resolve('babel-plugin-css-modules-transform'), {
      camelCase: true,
      devMode: true,
      extensions: ['.scss'],
      preprocessCss: processSass,
      processCss(css, filepath) {
        debug(`BABEL CSS ${cleanFilepath(filepath)}`);
        componentStyle = `${componentStyle}\n${css}`;
      }
    }]
  ],
  presets: [
    require.resolve('babel-preset-env'),
    require.resolve('babel-preset-react')
  ]
};

function compile(code) {
  // after first compilation, require will be hooked to use babel
  // because it is shared with the vm
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
    this.fractal = app;
    this.engineName = engineName;
    this.instance = instance;
    this.source = source;
    this.cache = {};
  }

  getCachedComponent(tplPath, tplCode) {
    const hashKey = getHashKey(tplPath, tplCode);
    if (this.cache[hashKey]) {
      return this.cache[hashKey];
    }

    debug(`COMPILE: ${cleanFilepath(tplPath)}`);
    componentStyle = '';
    const sandbox = getSandbox();
    vm.runInNewContext(`${compile(tplCode)}`, sandbox);
    const Component = sandbox.exports.default;
    Component.style = componentStyle;
    this.cache[hashKey] = Component;
    return Component;
  }

  render(tplPath, tplCode, tplContext, meta) {
    debug(`RENDERING: ${cleanFilepath(tplPath)}`);

    try {
      const Component = this.getCachedComponent(tplPath, tplCode);
      const { engineName, fractal, instance, source } = this;
      const props = Object.assign({},
        { engineName, fractal, instance, source, filePath: tplPath, meta },
        tplContext
      );
      const element = React.createElement(Component, props);
      const html = ReactDOMServer.renderToStaticMarkup(element);
      const output = `<style>${Component.style}</style>\n${html}`;
      return Promise.resolve(output);
    } catch (error) {
      debug(error);
      return Promise.reject(error.message);
    }
  }
}

module.exports = ReactAdapter;
