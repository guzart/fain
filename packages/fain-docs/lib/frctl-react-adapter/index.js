
// const debug = require('debug')('fain');
const babel = require('babel-core');
const Adapter = require('@frctl/fractal').Adapter;
// const beautify = require('js-beautify').html;
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const vm = require('vm');

// const element = React.createElement(Component, props);
// const html = ReactDOMServer.renderToStaticMarkup(element);
// const style = fs.readFileSync(styleFilename);
// return `<style>${style}</style>\n${beautify(html)}`;

// const scriptGlobal = {
//   React,
//   process: { env: 'production' },
//   window: { navigator: { userAgent: 'Node' } }
// };
// const scriptContext = vm.createContext(scriptGlobal);
//
// const content = fs.readFileSync(outputFilename);
// (new vm.Script(content)).runInContext(scriptContext);
// const Component = scriptGlobal.Component.default;
// setCachedComponent(templatePath, templateCode, Component);
// resolve(render(Component, props));

class ReactAdapter extends Adapter {
  constructor(engineName, instance, source, app) {
    super(instance, source);
    this.app = app;
    // this.compiler = webpack(config);
  }

  render(tplPath, tplCode, tplContext, meta) {
    const result = babel.transform(tplCode, {
      plugins: [
        'css-modules-transform', {
          preprocessCss: './process-sass.js',
          extensions: ['.scss'],
          dir: './dist',
          filename: '[path]/[name].css'
        }
      ],
      presets: ['env', 'react']
    });

    const wrapper = `
      require('babel-register')({
        ignore: /(processCss\\.js|node_modules)/
      })
    `;

    return Promise.resolve(result.code);

    // const props = Object.assign({}, { path: tplPath }, meta, tplContext);
    // const Component = getCachedComponent(tplPath, tplCode);
    // if (Component) {
    //   return Promise.resolve(render(Component, props));
    // }
    //
    // return compileTemplate(this.compiler, props, tplPath, tplCode);
  }
}

module.exports = function reactAdapter(engineName, instance) {
  return {
    register(source, app) {
      return new ReactAdapter(engineName, instance, source, app);
    }
  };
};
