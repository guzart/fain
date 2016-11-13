import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function FormControl({ className, ...other }) {
  return (
    <input {...other} className={classNames(className, styles.formControl)} />
  );
}

FormControl.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default FormControl;
