// @flow

import { css } from 'styled-components';

import type { CSSValue } from '../types.js.flow';

import {
  flexFeature,
  hoverMediaQueryFeature,
  roundedFeature,
  shadowsFeature,
  transitionsFeature,
} from '../helpers/feature';

export const borderRadius = roundedFeature(
  (value: CSSValue) => `border-radius: ${value};`,
  () => 'border-radius: 0;',
);

export const boxShadow = shadowsFeature(
  (value: CSSValue) => `box-shadow: ${value};`,
);

export const flexEnabled = flexFeature(
  (enabledStyle: any) => enabledStyle,
  (_, disabledStyle: any) => disabledStyle,
);

export const hover = hoverMediaQueryFeature(
  (...args: any[]) => css`@media (hover: hover) { ${css(...args)} }`,
  (...args: any[]) => css`&:hover { ${css(...args)} }`,
);

export const hoverFocus = hoverMediaQueryFeature(
  (...args: any[]) => css`
    &:focus { ${css(...args)} }
    ${hover(...args)}
  `,
  (...args: any[]) => css`
    &:focus { ${css(...args)} }
    ${hover(...args)}
  `,
);

export const transition = transitionsFeature(
  (value: CSSValue) => `transition: ${value};`,
);
