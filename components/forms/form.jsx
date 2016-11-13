import classNames from 'classnames';
import React, { PropTypes } from 'react';

// import styles from './styles.scss';

function Form({ children, className, ...other }) {
  return (
    <form {...other} className={classNames(className)}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Form;
