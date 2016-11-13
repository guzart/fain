import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function NavItem({ children, className, ...other }) {
  return (
    <div {...other} className={classNames(className, styles.navItem)}>
      {children}
    </div>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default NavItem;
