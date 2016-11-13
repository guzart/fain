import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function FormCheckControl({ children, className, id, label, ...other }) {
  return (
    <div className={classNames(className, styles.formCheck)}>
      <label className={styles.formCheckLabel} htmlFor={id}>
        <input {...other} className={styles.formCheckInput} id={id} type="checkbox" />
        {' '}
        {label}
      </label>
      {children}
    </div>
  );
}

FormCheckControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
};

export default FormCheckControl;
