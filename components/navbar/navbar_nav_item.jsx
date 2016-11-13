import classNames from 'classnames';
import React, { PropTypes } from 'react';

import NavItem from '../nav/nav_item';

import styles from './styles.scss';

function NavbarNavItem({ children, className, ...other }) {
  return (
    <NavItem {...other} className={classNames(className, styles.navbarNavItem)}>
      {children}
    </NavItem>
  );
}

NavbarNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default NavbarNavItem;
