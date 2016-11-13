import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function FormGroup({ children, className, ...other }) {
  return (
    <div {...other} className={classNames(className, styles.formGroup)}>
      {children}
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default FormGroup;
