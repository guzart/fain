// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  alt?: string,
  className: ClassName,
  role?: string,
};

function Img(props: Props) {
  const role = props.alt ? '' : (props.role || 'presentation');

  return (
    <img
      {...props}
      alt={props.alt}
      className={classNames(props.className, styles.img)}
      role={role}
    />
  );
}

export default Img;
