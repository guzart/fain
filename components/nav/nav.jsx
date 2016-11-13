import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function Nav({ children, className, ...other }) {
  return (
    <div {...other} className={classNames(className, styles.nav)}>
      {children}
    </div>
  );
}

Nav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Nav;
