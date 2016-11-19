// @flow

import classNames from 'classnames';
import omit from 'lodash/omit';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

type Props = {
  children: React.Element<*>,
  className: ClassName,
  id: string,
  label: string,
};

function FormCheckGroup(props: Props) {
  const inputProps = omit(props, ['children', 'className', 'id', 'label']);

  return (
    <div className={classNames(props.className, styles.formCheck)}>
      <label className={styles.formCheckLabel} htmlFor={props.id}>
        <input {...inputProps} className={styles.formCheckInput} id={props.id} type="checkbox" />
        {' '}
        {props.label}
      </label>
      {props.children}
    </div>
  );
}

FormCheckGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
};

export default FormCheckGroup;
