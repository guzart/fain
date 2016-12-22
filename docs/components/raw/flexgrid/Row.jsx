// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  align?: string,
  collapse?: Array<string>,
  className: ClassName,
  sizeUp?: Object,
  uncollapse?: Array<string>,
  unstack?: Array<string>,
};

function getAlignClassName(align) {
  if (!align) { return null; }
  return styles[`align-${align}`];
}

function getCollapseClassName(collapse) {
  if (!collapse) { return null; }
  return collapse.map(size => styles[`${size}-collapse`]);
}

function getSizeUpClassName(sizeUp) {
  if (!sizeUp) { return null; }
  return Object.keys(sizeUp).map(name => styles[`${name}-up-${sizeUp[name]}`]);
}

function getUncollapseClassName(collapse) {
  if (!collapse) { return null; }
  return collapse.map(size => styles[`${size}-uncollapse`]);
}

function getUnstackClassName(unstack) {
  if (!unstack) { return null; }
  return unstack.map(size => styles[`${size}-unstack`]);
}

function FlexGridRow(props: Props) {
  const { align, collapse, sizeUp, uncollapse, unstack, ...other } = props;
  const rowClassName = classNames(
    props.className,
    styles.row,
    getAlignClassName(align),
    getCollapseClassName(collapse),
    getSizeUpClassName(sizeUp),
    getUncollapseClassName(uncollapse),
    getUnstackClassName(unstack),
  );

  return (
    <div
      {...other}
      className={rowClassName}
    />
  );
}

export default FlexGridRow;
