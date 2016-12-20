// @flow

import classNames from 'classnames';
import React from 'react';

import BaseAnchor from '../../globals/Anchor';

import styles from '../Button/index.scss';

type Props = {
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
    <BaseAnchor
      {...props}
      ariaDisabled={props.disabled}
      className={buttonCN}
    />
  );
}

Anchor.defaultProps = {
  expanded: false,
  size: 'default',
};

export default Anchor;
