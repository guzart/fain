import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function FormLabel({ children, className, htmlFor, ...other }) {
  return (
    <label {...other} className={classNames(className, styles.formLabel)} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  htmlFor: PropTypes.string.isRequired,
};

export default FormLabel;
