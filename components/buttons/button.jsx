import classNames from 'classnames';
import omit from 'lodash/omit';
import React, { PropTypes } from 'react';

import { titleize } from '../../utils/inflectors';

import styles from './button.scss';

const buttonStyles = ['danger', 'info', 'primary', 'secondary', 'success', 'warning'];

function getButtonStyle(buttonStylesMap) {
  return Object.keys(buttonStylesMap).find(k => styles[k]);
}

function Button(props) {
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

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  danger: PropTypes.bool,
  info: PropTypes.bool,
  outline: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
