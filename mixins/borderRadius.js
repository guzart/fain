// @flow

import { roundedFeature } from '../helpers/feature';
import type { CSSValue } from '../types.js.flow';

const borderRadius = roundedFeature(
  (value: CSSValue) => `border-radius: ${value};`,
  () => 'border-radius: 0;',
);

export default borderRadius;
