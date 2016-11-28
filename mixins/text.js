// @flow

import { css } from 'styled-components';

import type { ComponentProps } from '../types.js.flow';

import hoverFocus from '../mixins/hoverFocus';
import { darken } from '../helpers/color';
import { extractTheme } from '../utils/theme';

type TextOptions = {
  hover?: boolean,
};

export const textMuted = (options?: TextOptions) =>
  (props: ComponentProps) => {
    const opts = Object.assign({}, { hover: false }, options);
    const theme = extractTheme(props);
    const focusColor = darken(0.62, theme.textMuted);
    const hoverStyle = opts.hover ? hoverFocus(`color: ${focusColor};`) : '';
    return css`
      color: ${theme.textMuted};
      ${hoverStyle}
    `;
  };

export const textHide = () => css`
  background-color: transparent;
  border: 0;
  color: transparent;
  font: 0/0 a;
  text-shadow: none;
`;
