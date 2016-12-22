// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  className: ClassName,
  componentClass: string,
};

function CardDivider(props: Props) {
  const { componentClass: Component, ...other } = props;
  return (
    <Component
      {...other}
      className={classNames(props.className, styles.cardDivider)}
    />
  );
}

CardDivider.defaultProps = {
  componentClass: 'div',
};

export default CardDivider;
