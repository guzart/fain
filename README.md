# fain

React components based on [ZURB Foundation Sites](http://foundation.zurb.com/sites.html) using
[CSS modules](https://github.com/css-modules/css-modules).

Take a look at the **[Component Reference](https://guzart.github.io/fain/)** for an overview of
the available components with their `props` and current status.

## Install

To use these components you need an assets build process (Webpack, Browserify, etc) with
Sass and CSS Modules support.

1. Install package:  
  `npm install fain --save`
2. Install peer dependencies:  
  `npm install foundation-sites react --save`
2. Setup [CSS modules](https://github.com/css-modules/css-modules#implementations) in your
   assets build process configuration.
   * Enable the `camelCase` option
   * Add the `node_modules` dir to your `sass.includePaths`

### Webpack

Use [sass-loader](https://github.com/jtangelder/sass-loader#sass-options)
with [css-loader](https://github.com/webpack/css-loader).

```js
// webpack.config.js

var nodeModulesPath = path.resolve('./node_modules');

module.exports = {
  // ...
  loaders: [
    //...
    {
      test: \/.scss?$/,
      loader: [
        'style',
        'css?camelCase=1',
        `sass?includePaths[]=${nodeModulesPath}`
      ]
    },
    //...
  ],
  //...
};
```

## Customization

_TODO: add webpack and babel examples of prepending a settings file_

Themability for components is available using [Foundation SASS variables](http://foundation.zurb.com/sites/docs/global.html).

## Usage

```js
import React, { PropTypes } from 'react';

import Button from 'fain/controls/Button';

function Root() {
  render() {
    return (
      <div>
        <Button
          color="primary"
          size="large"
        >Sign In</Button>
      </div>
    );
  }
}

export default Root;
```

For more examples, head over to the **[Component Reference](https://guzart.github.io/fain/)**.
