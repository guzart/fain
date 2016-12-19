// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  className: ClassName,
  color: string,
  expanded: boolean,
  size: 'tiny' | 'small' | 'default' | 'large',
  type: 'button' | 'submit',
};

function Button(props: Props) {
  const buttonCN = classNames(
    props.className,
    styles.button,
    styles[props.size],
    styles[props.color],
    {
      [styles.expanded]: props.expanded,
    },
  );

  return (
    <button
      {...props}
      className={buttonCN}
      type={props.type}
    />
  );
}

Button.defaultProps = {
  expanded: false,
  size: 'default',
  type: 'button',
};

export default Button;
