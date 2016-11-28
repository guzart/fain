// @flow

import { css } from 'styled-components';

import { hoverMediaQueryFeature } from '../helpers/feature';
import hover from './hover';

const hoverFocus = hoverMediaQueryFeature(
  (...args: any[]) => css`
    &:focus { ${css(...args)} }
    ${hover(...args)}
  `,
  (...args: any[]) => css`
    &:focus { ${css(...args)} }
    ${hover(...args)}
  `,
);

export default hoverFocus;
