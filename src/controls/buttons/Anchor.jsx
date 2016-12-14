// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './Button.scss';

type Props = {
  children: any,
  className: ClassName,
  disabled: boolean,
  expanded: boolean,
  size: 'tiny' | 'small' | 'default' | 'large',
};

function Anchor(props: Props) {
  const buttonCN = classNames(
    props.className,
    styles.button,
    styles[props.size],
    {
      disabled: props.disabled,
      expanded: props.expanded,
    },
  );

  return (
    <a
      {...props}
      ariaDisabled={props.disabled}
      className={buttonCN}
    >{props.children}</a>
  );
}

Anchor.defaultProps = {
  expanded: false,
  size: 'default',
};

export default Anchor;
