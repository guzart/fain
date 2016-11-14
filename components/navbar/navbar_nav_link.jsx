import classNames from 'classnames';
import React, { PropTypes } from 'react';

import NavLink from '../nav/nav_link';

import * as FainPropTypes from '../../proptypes';

import styles from './styles.scss';

class NavbarNavLink extends React.Component {
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
      styles.navbarNavLink,
      styles[`navbarNavLink${navbarTheme}`],
    );

    return (
      <NavLink {...other} className={nodeClassName}>
        {children}
      </NavLink>
    );
  }
}

export default NavbarNavLink;
