// @flow

import styled, { css } from 'styled-components';

import type { Theme } from '../../theme';
import type { ComponentProps, CSSValue } from '../../types.js.flow';

import { extractTheme, roundedFeature, themeProperty } from '../../utils/theme';

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

const borderRadius = roundedFeature(br => `
  border-radius: ${br};
`);

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

const buttonStyle = (props: ComponentProps) => {
  const theme = extractTheme(props);
  const styleTheme = buttonStyleTheme(theme, buttonStyleName(props));
  return css`
    background-color: ${styleTheme.backgroundColor};
    border-color: ${styleTheme.borderColor};
    color: ${styleTheme.color};
  `;
  // ${hover`
  //   color: ${styleTheme.color};
  //   background-color: ${activeBackgroundColor};
  //   border-color: ${activeBorderColor};
  // `}
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
    ${borderRadius(theme, sizeTheme.borderRadius)};
    font-size: ${sizeTheme.fontSize};
    padding-bottom: ${sizeTheme.paddingY};
    padding-left: ${sizeTheme.paddingX};
    padding-right: ${sizeTheme.paddingX};
    padding-top: ${sizeTheme.paddingY};
  `;
};

// Button

const Button = styled.button`
  border: ${themeProperty(t => t.inputBtnBorderWidth)};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: all .2s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  ${buttonSize}
  ${buttonStyle}
`;

export default Button;
