// @flow

import React from 'react';
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

type ButtonOutlineStyleTheme = {
  color: CSSValue,
  colorHover: CSSValue,
};

type ButtonStyleTheme = {
  backgroundColor: CSSValue,
  borderColor: CSSValue,
  color: CSSValue,
};

type Props = ComponentProps & {
  danger?: boolean,
  disabled?: boolean,
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

const getStyleTheme =
  (theme: Theme, styleName: ButtonStyleName): ButtonStyleTheme => ({
    backgroundColor: theme[`btn${styleName}Bg`],
    borderColor: theme[`btn${styleName}Border`],
    color: theme[`btn${styleName}Color`],
  });

const getOutlineStyleTheme =
  (theme: Theme, styleName: ButtonStyleName): ButtonOutlineStyleTheme => {
    const type = styleName === 'Secondary' ? 'Border' : 'Bg';
    return {
      color: theme[`btn${styleName}${type}`],
      colorHover: '#fff',
    };
  };

const getButtonStyleName = (props: Props): ButtonStyleName => {
  if (props.danger) { return 'Danger'; }
  if (props.info) { return 'Info'; }
  if (props.primary) { return 'Primary'; }
  if (props.secondary) { return 'Secondary'; }
  if (props.success) { return 'Success'; }
  if (props.warning) { return 'Warning'; }
  return '';
};

const outlineButtonStyle = (props: Props) => {
  const theme = extractTheme(props);
  const { color, colorHover } = getOutlineStyleTheme(theme, getButtonStyleName(props));

  return css`
    background-color: transparent;
    background-image: none;
    border-color: ${color};
    color: ${color};

    ${hover`
      background-color: ${color};
      border-color: ${color}
      color: ${colorHover};
    `}

    &:focus {
      background-color: ${color};
      border-color: ${color};
      color: ${colorHover};
    }

    &:active {
      background-color: ${color};
      border-color: ${color};
      color: ${colorHover};

      ${hoverFocus`
        color: ${colorHover};
        background-color: ${darken(0.62, color)};
        border-color: ${darken(0.77, color)};
      `}
    }

    &:disabled {
      cursor: not-allowed;
      opacity: .65;

      ${hoverFocus`
        background-color: transparent;
        background-image: none;
        color: ${color};
      `}
    }
  `;
};

const regularButtonStyle = (props: Props) => {
  const theme = extractTheme(props);
  const styleName = getButtonStyleName(props);
  const { backgroundColor, borderColor, color } = getStyleTheme(theme, styleName);
  const activeBg = darken(0.62, backgroundColor);
  const activeBorder = darken(0.77, borderColor);

  return css`
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    ${boxShadow(t => t.btnBoxShadow)}
    color: ${color};

    ${hover`
      background-color: ${activeBg};
      border-color: ${activeBorder};
      color: ${color};
    `}

    &:focus {
      background-color: ${activeBg};
      border-color: ${activeBorder};
      color: ${color};
    }

    &:active {
      background-color: ${activeBg};
      background-image: none;
      border-color: ${activeBorder};
      ${boxShadow(theme.btnActiveBoxShadow)}
      color: ${color};
      outline: 0;

      ${hoverFocus`
        background-color: ${darken(1.12, backgroundColor)};
        border-color: ${darken(1.65, borderColor)};
        color: ${color};
      `}
    }

    &:disabled {
      cursor: not-allowed;
      opacity: .65;

      ${hoverFocus`
        background-color: ${backgroundColor};
        border-color: ${borderColor};
        color: ${color};
      `}
    }
  `;
};

const buttonStyle = (props: Props) =>
  (props.outline ? outlineButtonStyle(props) : regularButtonStyle(props));

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
    ${borderRadius(sizeTheme.borderRadius)};
    font-size: ${sizeTheme.fontSize};
    padding-bottom: ${sizeTheme.paddingY};
    padding-left: ${sizeTheme.paddingX};
    padding-right: ${sizeTheme.paddingX};
    padding-top: ${sizeTheme.paddingY};
  `;
};

// Button

const StyledButton = styled.button`
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

function Button({ disabled, tabIndex, ...other }: Props) {
  return (
    <StyledButton
      {...other}
      disabled={disabled}
      tabIndex={disabled ? '-1' : tabIndex}
    />
  );
}

export default Button;
