// @flow

// import classNames from 'classnames';
// import omit from 'lodash/omit';
// import React from 'react';
import styled, { css } from 'styled-components';

import { themeFeature, themePropLens } from '../../utils/theme';
// import { titleize } from '../../utils/inflectors';

type ButtonSize = 'normal' | 'small' | 'large';

type ButtonStyle = 'normal' | 'danger' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';

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


const theme = themePropLens(t => t.buttons);

const borderRadius = themeFeature(
  themeFeatures => themeFeatures.rounded,
  theme,
  br => `
    border-radius: ${br};
  `,
);

const buttonStyleName = (props: Props): ButtonStyle => {
  if (props.danger) { return 'danger'; }
  if (props.info) { return 'info'; }
  if (props.primary) { return 'primary'; }
  if (props.secondary) { return 'secondary'; }
  if (props.success) { return 'success'; }
  if (props.warning) { return 'warning'; }
  return 'normal';
};

const buttonStyle = (props) => {
  const style = buttonStyleName(props);
  const styleTheme = theme(bt => bt[style])(props);
  return css`
    background-color: ${styleTheme.backgroundColor};
    border-color: ${styleTheme.borderColor};
    color: ${styleTheme.color};
  `;
};

const buttonSizeName = (props: Props): ButtonSize => {
  if (props.small) { return 'small'; }
  if (props.large) { return 'large'; }
  return 'normal';
};

const buttonSize = (props) => {
  const size = buttonSizeName(props);
  const sizeTheme = theme(bt => bt[size])(props);
  return css`
    ${borderRadius(bt => bt[size].borderRadius)(props)};
    font-size: ${sizeTheme.fontSize};
    padding-bottom: ${sizeTheme.paddingY};
    padding-left: ${sizeTheme.paddingX};
    padding-right: ${sizeTheme.paddingX};
    padding-top: ${sizeTheme.paddingY};
  `;
};

const Button = styled.button`
  border: ${theme(t => t.borderWidth)};
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

// function Button(props: Props) {
//   const { children, outline, type, ...other } = props;
//
//   const buttonProps = omit(other, buttonStyles);
//   // const buttonStyle = getButtonStyle(other);
//   // const buttonClassName = classNames(
//   //   className,
//   //   styles.button,
//   //   {
//   //     [styles[buttonStyle]]: !outline,
//   //     [styles[`outline${titleize(buttonStyle)}`]]: outline,
//   //   },
//   // );
//
//   return (
//     <button
//       {...buttonProps}
//       type={type}
//     >
//       {children}
//     </button>
//   );
// }
//
// Button.defaultProps = {
//   type: 'button',
// };

export default Button;
