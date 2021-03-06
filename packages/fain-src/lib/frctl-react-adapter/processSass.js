const debug = require('debug')('fain:processSass');
const sass = require('node-sass');
const path = require('path');

const utils = require('./utils');

// TODO: add option to include a Foundation project settings file
// (http://foundation.zurb.com/sites/docs/sass.html#the-settings-file)

module.exports = function processSass(data, filename) {
  debug(`COMPILE: ${utils.cleanFilepath(filename)}`);
  const opts = {
    data: data,
    file: filename,
    includePaths: [path.resolve(__dirname, '..', '..', 'node_modules')]
  };
  const result = sass.renderSync(opts);

  return result.css.toString('utf8');
};
