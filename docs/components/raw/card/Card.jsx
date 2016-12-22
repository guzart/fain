// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  className: ClassName,
  componentClass: string,
};

function Card(props: Props) {
  const { componentClass: Component, ...other } = props;
  return (
    <Component
      {...other}
      className={classNames(props.className, styles.card)}
    />
  );
}

Card.defaultProps = {
  componentClass: 'div',
};

export default Card;
