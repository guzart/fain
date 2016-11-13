import classNames from 'classnames';
import React, { PropTypes } from 'react';

import NavLink from '../nav/nav_link';

import * as FainPropTypes from '../../proptypes';

import styles from './styles.scss';

class NavbarNavLink extends React.Component {
  static contextTypes = {
    theme: FainPropTypes.navbarTheme,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  render() {
    const { children, className, ...other } = this.props;
    const { theme } = this.context;
    const nodeClassName = classNames(className, styles.navbarNavLink, styles[`navbarNavLink${theme}`]);
    return (
      <NavLink {...other} className={nodeClassName}>
        {children}
      </NavLink>
    );
  }
}

export default NavbarNavLink;
