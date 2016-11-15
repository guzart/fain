import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function Container({ children, className, fluid, ...other }) {
  const containerStyle = fluid ? styles.containerFluid : styles.container;
  return (
    <div {...other} className={classNames(className, containerStyle)}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
};

export default Container;
