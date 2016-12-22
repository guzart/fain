// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  className: ClassName,
  color: string,
};

function Badge(props: Props) {
  return (
    <span
      {...props}
      className={classNames(props.className, styles.badge, styles[props.color])}
    />
  );
}

export default Badge;
