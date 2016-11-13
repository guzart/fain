import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function CardHeader({ children, className, typeName }) {
  const TypeName = typeName;
  return (
    <TypeName className={classNames(className, styles.header)}>
      {children}
    </TypeName>
  );
}

CardHeader.defaultProps = {
  typeName: 'div',
};

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  typeName: PropTypes.string,
};

export default CardHeader;
