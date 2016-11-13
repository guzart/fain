import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function Card({ children, className }) {
  return (
    <div className={classNames(className, styles.card)}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Card;
