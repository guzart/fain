import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function Container({ children, className, ...other }) {
  return (
    <div {...other} className={classNames(className, styles.container)}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Container;
