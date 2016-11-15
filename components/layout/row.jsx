import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function Row({ children, className, ...other }) {
  return (
    <div {...other} className={classNames(className, styles.row)}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Row;
