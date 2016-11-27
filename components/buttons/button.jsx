// @flow

import styled, { css } from 'styled-components';

import type { Theme } from '../../theme';
import type { ComponentProps, CSSValue } from '../../types.js.flow';

import { darken } from '../../utils/color';
import { extractTheme, themeProperty } from '../../utils/theme';
import { borderRadius, boxShadow, hover, hoverFocus, transition } from '../../utils/feature';


// Types

type ButtonSizeSuffix = '' | 'Sm' | 'Lg';

type ButtonSizeTheme = {
  borderRadius: CSSValue,
  fontSize: CSSValue,
  paddingX: CSSValue,
  paddingY: CSSValue,
};

type ButtonStyleName = '' | 'Danger' | 'Info' | 'Primary' | 'Secondary' | 'Success' | 'Warning';

type ButtonStyleTheme = {
  backgroundColor: CSSValue,
  borderColor: CSSValue,
  color: CSSValue,
};

type Props = {
  danger?: boolean,
  info?: boolean,
  large?: boolean,
  outline?: boolean,
  primary?: boolean,
  secondary?: boolean,
  small?: boolean,
  success?: boolean,
  warning?: boolean,
};


// Button Style

const buttonStyleTheme = (theme: Theme, styleName: ButtonStyleName): ButtonStyleTheme => ({
  backgroundColor: theme[`btn${styleName}BackgroundColor`],
  borderColor: theme[`btn${styleName}BorderColor`],
  color: theme[`btn${styleName}Color`],
});

const buttonStyleName = (props: Props): ButtonStyleName => {
  if (props.danger) { return 'Danger'; }
  if (props.info) { return 'Info'; }
  if (props.primary) { return 'Primary'; }
  if (props.secondary) { return 'Secondary'; }
  if (props.success) { return 'Success'; }
  if (props.warning) { return 'Warning'; }
  return '';
};

const buttonActiveStyle = (theme: ButtonStyleTheme) => {
  const activeBackgroundColor = darken(0.62, theme.backgroundColor);
  const activeBorderColor = darken(0.77, theme.borderColor);
  return css`
    background-color: ${activeBackgroundColor};
    border-color: ${activeBorderColor};
    color: ${theme.color};
  `;
};

const buttonBaseStyle = (theme: ButtonStyleTheme) =>
  css`
    background-color: ${theme.backgroundColor};
    border-color: ${theme.borderColor};
    color: ${theme.color};
  `;

const buttonStyle = (props: ComponentProps) => {
  const theme = extractTheme(props);
  const styleTheme = buttonStyleTheme(theme, buttonStyleName(props));
  const baseStyle = buttonBaseStyle(styleTheme);
  const activeStyle = buttonActiveStyle(styleTheme);

  return css`
    ${baseStyle}
    ${boxShadow(t => t.btnBoxShadow)}

    ${hover`
      ${activeStyle}
    `}

    &:focus {
      ${activeStyle}
    }

    &:active {
      ${activeStyle}
      background-image: none;
      ${boxShadow(theme.btnActiveBoxShadow)}
      outline: 0;

      ${hoverFocus`
        color: ${styleTheme.color};
        background-color: ${darken(1.12, styleTheme.backgroundColor)};
        border-color: ${darken(1.65, styleTheme.borderColor)};
      `}
    }

    &:disabled {
      cursor: not-allowed;
      opacity: .65;

      ${hoverFocus`
        ${baseStyle}
      `}
    }
  `;
};

// Button Size

const buttonSizeTheme = (theme: Theme, suffix: ButtonSizeSuffix): ButtonSizeTheme => ({
  borderRadius: theme[`btnBorderRadius${suffix}`],
  fontSize: theme[`btnFontSize${suffix}`],
  paddingX: theme[`btnPaddingX${suffix}`],
  paddingY: theme[`btnPaddingY${suffix}`],
});

const buttonSizeSuffix = (props: Props): ButtonSizeSuffix => {
  if (props.small) { return 'Sm'; }
  if (props.large) { return 'Lg'; }
  return '';
};

const buttonSize = (props: ComponentProps) => {
  const theme = extractTheme(props);
  const sizeTheme = buttonSizeTheme(theme, buttonSizeSuffix(props));
  return css`
    ${borderRadius(sizeTheme.borderRadius)}; // #01549b
    font-size: ${sizeTheme.fontSize};
    padding-bottom: ${sizeTheme.paddingY};
    padding-left: ${sizeTheme.paddingX};
    padding-right: ${sizeTheme.paddingX};
    padding-top: ${sizeTheme.paddingY};
  `;
};

// Button

const Button = styled.button`
  border-style: solid;
  border-width: ${themeProperty(t => t.inputBtnBorderWidth)};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  ${buttonSize}
  ${buttonStyle}
  ${transition('all .2s ease-in-out')}
`;

export default Button;
