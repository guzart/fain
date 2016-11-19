// @flow

import classNames from 'classnames';
import omit from 'lodash/omit';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

type Props = {
  className?: ClassName,
  id: string,
  name?: string,
};

function FormControl(props: Props) {
  const inputProps = omit(props, ['className']);

  return (
    <input
      {...inputProps}
      className={classNames(props.className, styles.formControl)}
      id={props.id}
      name={props.id || props.name}
    />
  );
}

FormControl.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default FormControl;
