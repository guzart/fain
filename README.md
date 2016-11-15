# fain

React components based on [Bootstrap 4](https://v4-alpha.getbootstrap.com/) using
[CSS modules](https://github.com/css-modules/css-modules).

## Install

To use these components you need to include this module as part of your ES6 transformations.

1. `npm install fain --save`
2. Include this package as part of your ES6 transformations

```js
// webpack.config.js

module.exports = {
  // ...
  loaders: [
    {
      test: \/.jsx?$/,
      exclude: /node_modules\/(?!fain)/,
      loader: 'babel',
    },
  ],
  //...
};
```

## Example

```js
import React, { PropTypes } from 'react';

import { Button } from 'fain/components/buttons';
import { Column, Container, Row } from 'fain/components/layout';

function Root() {
  render() {
    return (
      <Container>
        <Row>
          <Column smallSize={8}>
            <Button outline primary>Sign In</Button>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default Root;
```
