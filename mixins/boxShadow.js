// @flow

import { shadowsFeature } from '../helpers/feature';
import type { CSSValue } from '../types.js.flow';

const boxShadow = shadowsFeature(
  (value: CSSValue) => `box-shadow: ${value};`,
);

export default boxShadow;
