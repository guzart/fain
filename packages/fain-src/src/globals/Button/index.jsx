// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  className: ClassName,
};

function Button(props: Props) {
  return (
    <button
      {...props}
      className={classNames(props.className, styles.button)}
    />
  );
}

export default Button;
