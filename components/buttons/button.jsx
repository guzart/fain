// @flow

import classNames from 'classnames';
import omit from 'lodash/omit';
import React from 'react';

import { titleize } from '../../utils/inflectors';

import styles from './button.scss';

const buttonStyles = ['danger', 'info', 'primary', 'secondary', 'success', 'warning'];

function getButtonStyle(buttonStylesMap) {
  return Object.keys(buttonStylesMap).find(k => styles[k]);
}

type Props = {
  children: React.Element<*>,
  className: ClassName,
  danger: boolean,
  info: boolean,
  outline: boolean,
  primary: boolean,
  secondary: boolean,
  success: boolean,
  warning: boolean,
  type: 'button' | 'submit',
};

function Button(props: Props) {
  const { children, className, outline, type, ...other } = props;

  const buttonProps = omit(other, buttonStyles);
  const buttonStyle = getButtonStyle(other);
  const buttonClassName = classNames(
    className,
    styles.button,
    {
      [styles[buttonStyle]]: !outline,
      [styles[`outline${titleize(buttonStyle)}`]]: outline,
    },
  );

  return (
    <button
      {...buttonProps}
      className={buttonClassName}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

export default Button;
