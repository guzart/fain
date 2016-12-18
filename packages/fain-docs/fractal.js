const fractal = require('@frctl/fractal').create(); // eslint-disable-line
const path = require('path');
const reactAdapter = require('./lib/frctl-react-adapter');

const rootPath = path.resolve(__dirname, '..', '..');

fractal.set('project.title', 'Fain Component Library');

fractal.components.engine(reactAdapter);
fractal.components.set('path', path.join(rootPath, 'src'));
fractal.components.set('ext', '.react');
fractal.components.set('default.display', {
  padding: '1rem',
});

fractal.docs.set('path', path.join(__dirname, 'docs'));

module.exports = fractal;
