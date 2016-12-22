// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  alignSelf?: 'bottom' | 'middle' | 'top',
  className: ClassName,
  offset?: Object,
  order?: Object,
  size?: Object,
};

function getAlignSelfClassName(alignSelf) {
  if (!alignSelf) { return null; }
  return styles[`align-self-${alignSelf}`];
}

function getOffsetClassName(offset) {
  if (!offset) { return null; }
  return Object.keys(offset).map(name => styles[`${name}-offset-${offset[name]}`]);
}

function getOrderClassName(order) {
  if (!order) { return null; }
  return Object.keys(order).map(name => styles[`${name}-order-${order[name]}`]);
}

function getSizeClassName(size) {
  if (!size) { return null; }
  return Object.keys(size).map(name => styles[`${name}-${size[name]}`]);
}

function FlexGridCol(props: Props) {
  const { alignSelf, offset, order, size, ...other } = props;
  const colClassName = classNames(
    props.className,
    styles.columns,
    getAlignSelfClassName(alignSelf),
    getOffsetClassName(offset),
    getOrderClassName(order),
    getSizeClassName(size),
  );

  return (
    <div
      {...other}
      className={colClassName}
    />
  );
}

export default FlexGridCol;
