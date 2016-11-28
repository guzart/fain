// @flow

import { transitionsFeature } from '../helpers/feature';
import type { CSSValue } from '../types.js.flow';


const transition = transitionsFeature(
  (value: CSSValue) => `transition: ${value};`,
);

export default transition;
