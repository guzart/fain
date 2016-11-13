import classNames from 'classnames';
import React, { PropTypes } from 'react';

import Nav from '../nav/nav';

import styles from './styles.scss';

function NavbarNav({ children, className, ...other }) {
  return (
    <Nav {...other} className={classNames(className, styles.navbarNav)}>
      {children}
    </Nav>
  );
}

NavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default NavbarNav;
