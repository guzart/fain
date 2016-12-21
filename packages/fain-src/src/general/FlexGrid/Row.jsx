// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

type Props = {
  align?: string,
  collapse?: Array<string>,
  className: ClassName,
  uncollapse?: Array<string>,
  unstack?: string,
};

function getAlignClassName(align) {
  if (!align) { return null; }
  return styles[`align-${align}`];
}

function getCollapseClassName(collapse) {
  if (!collapse) { return null; }
  return collapse.map(size => styles[`${size}-collapse`]);
}

function getUncollapseClassName(collapse) {
  if (!collapse) { return null; }
  return collapse.map(size => styles[`${size}-uncollapse`]);
}

function getUnstackClassName(unstack) {
  if (!unstack) { return null; }
  return styles[`${unstack}-unstack`];
}

function FlexGridRow(props: Props) {
  const rowClassName = classNames(
    props.className,
    styles.row,
    getAlignClassName(props.align),
    getCollapseClassName(props.collapse),
    getUncollapseClassName(props.uncollapse),
    getUnstackClassName(props.unstack),
  );

  return (
    <div
      {...props}
      className={rowClassName}
    />
  );
}

export default FlexGridRow;
