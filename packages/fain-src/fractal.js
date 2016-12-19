const fractal = require('@frctl/fractal').create(); // eslint-disable-line
const path = require('path');

const reactAdapter = require('./lib/frctl-react-adapter');

const paths = {
  components: path.resolve('./src'),
  docs: path.resolve('./fractal-docs'),
  static: path.resolve('./public')
};

fractal.set('project.title', 'Fain Component Library');

fractal.components.engine(reactAdapter);
fractal.components.set('default.preview', '@preview');
fractal.components.set('path', paths.components);
fractal.components.set('ext', '.react');
fractal.components.set('default.display', {
  padding: '1rem'
});

fractal.docs.set('path', paths.docs);

fractal.web.set('static.path', paths.static);

module.exports = fractal;
