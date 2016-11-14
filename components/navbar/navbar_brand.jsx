import classNames from 'classnames';
import React, { PropTypes } from 'react';

import * as FainPropTypes from '../../proptypes';

import styles from './styles.scss';

class NavbarBrand extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static contextTypes = {
    navbarTheme: FainPropTypes.navbarTheme,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  render() {
    const { children, className, ...other } = this.props;
    const { navbarTheme } = this.context;
    const nodeClassName = classNames(
      className,
      styles.navbarBrand,
      styles[`navbarBrand${navbarTheme}`],
    );

    return (
      <div {...other} className={nodeClassName}>
        {children}
      </div>
    );
  }
}

export default NavbarBrand;
