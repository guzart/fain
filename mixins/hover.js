// @flow

import { css } from 'styled-components';

import { hoverMediaQueryFeature } from '../helpers/feature';

const hover = hoverMediaQueryFeature(
  (...args: any[]) => css`@media (hover: hover) { ${css(...args)} }`,
  (...args: any[]) => css`&:hover { ${css(...args)} }`,
);

export default hover;
