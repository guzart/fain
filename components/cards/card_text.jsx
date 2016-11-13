import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function CardText({ children, className }) {
  return (
    <p className={classNames(className, styles.text)}>
      {children}
    </p>
  );
}

CardText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default CardText;
