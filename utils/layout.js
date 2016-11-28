// @flow

import { css } from 'styled-components';

import { themeProperty } from '../helpers/theme';
import type { LayoutSizeName } from '../types.js.flow';

export const mediaBreakpointDown =
  (sizeName: LayoutSizeName) =>
    (style: any) =>
        css`
          @media (max-width: ${themeProperty(t => t.gridBreakpoints[sizeName])}) {
            ${style}
          }
        `;

export const mediaBreakpointUp =
  (sizeName: LayoutSizeName) =>
    (style: any) =>
        css`
          @media (min-width: ${themeProperty(t => t.gridBreakpoints[sizeName])}) {
            ${style}
          }
        `;
