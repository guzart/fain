# fain

React components based on [ZURB Foundation Sites](http://foundation.zurb.com/sites.html) using
[CSS modules](https://github.com/css-modules/css-modules).

## Install

To use these components you need to include this module as part of your ES6 transformations.

1. `npm install fain --save`
2. Setup [CSS modules](https://github.com/css-modules/css-modules#implementations) in your
   assets build system.
   * Enable the `camelCase` option
   * Add the `node_modules` dir to your `sass.includePaths`

### Webpack

```js
// webpack.config.js

module.exports = {
  // ...
  loaders: [
    {
      test: \/.scss?$/,
      exclude: /node_modules\/(?!fain)/,
      loader: ['style', 'css?camelCase', 'sass'],
    },
  ],
  //...
};
```

## Customization

_TODO: add example of prepending variables config_

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
