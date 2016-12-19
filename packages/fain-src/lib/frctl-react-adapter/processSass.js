const debug = require('debug')('fain');
const sass = require('node-sass');
const path = require('path');

module.exports = function processSass(data, filename) {
  debug(`procesSass: compile ${filename}`);
  const opts = {
    data: data,
    file: filename,
    includePaths: [path.resolve(__dirname, '..', '..', 'node_modules')]
  };
  const result = sass.renderSync(opts);

  return result.css.toString('utf8');
};
