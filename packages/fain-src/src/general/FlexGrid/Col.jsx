// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  className: ClassName,
  offset: Object,
  size: Object,
};

function getOffsetStyle(offset) {
  if (!offset) { return null; }
  return Object.keys(offset).map(name => styles[`${name}-offset-${offset[name]}`]);
}

function getSizeStyle(size) {
  if (!size) { return null; }
  return Object.keys(size).map(name => styles[`${name}-${size[name]}`]);
}

function FlexGridCol(props: Props) {
  const colClassName = classNames(
    props.className,
    styles.columns,
    getOffsetStyle(props.offset),
    getSizeStyle(props.size),
  );

  return (
    <div
      {...props}
      className={colClassName}
    />
  );
}

export default FlexGridCol;
