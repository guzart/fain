import classNames from 'classnames';
import React, { PropTypes } from 'react';

import * as FainPropTypes from '../../proptypes';

import styles from './styles.scss';

class NavbarBrand extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static contextTypes = {
    theme: FainPropTypes.navbarTheme,
  };

  render() {
    const { children, className, ...other } = this.props;
    const { theme } = this.context;
    const nodeClassName = classNames(className, styles.navbarBrand, styles[`navbarBrand${theme}`]);

    return (
      <div {...other} className={nodeClassName}>
        {children}
      </div>
    );
  }
}

export default NavbarBrand;
