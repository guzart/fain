// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  className: ClassName,
  children: React.Node,
};

function Anchor(props: Props) {
  return (
    <a
      {...props}
      className={classNames(props.className, styles.anchor)}
    >{props.children}</a>
  );
}

export default Anchor;
