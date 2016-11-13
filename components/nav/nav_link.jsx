import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function NavLink({ children, className, ...other }) {
  return (
    <a {...other} className={classNames(className, styles.navLink)}>
      {children}
    </a>
  );
}

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default NavLink;
