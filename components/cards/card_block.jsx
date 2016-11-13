import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function CardBlock({ children, className }) {
  return (
    <div className={classNames(className, styles.block)}>
      {children}
    </div>
  );
}

CardBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default CardBlock;
