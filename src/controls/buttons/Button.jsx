// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './ButtonStyles.scss';

type Props = {
  className: ClassName,
  expanded: boolean,
  size: 'tiny' | 'small' | 'default' | 'large',
  type: 'button' | 'submit',
};

function Button(props: Props) {
  const buttonCN = classNames(
    props.className,
    styles.button,
    styles[props.size],
    {
      expanded: props.expanded,
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
