import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './button.scss';

class Button extends React.PureComponent {
  static propTypes = {
    buttonStyle: PropTypes.oneOf(['default', 'primary']),
    children: PropTypes.node,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    type: PropTypes.oneOf(['button', 'submit']),
  };

  static defaultProps = {
    buttonStyle: 'default',
    type: 'button',
  };

  render() {
    const { buttonStyle, type, ...other } = this.props;
    const buttonClassName = classNames(
      this.props.className,
      styles.btn,
      styles[buttonStyle],
    );

    return (
      <button
        {...other}
        className={buttonClassName}
        type={type}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
