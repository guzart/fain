import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

function buildDescriptor(offset, pull, push, size, base) {
  const defaults = { offset: 0, pull: 0, push: 0, size: 0 };
  return Object.assign(defaults, { offset, pull, push, size }, base || {});
}

function getColumnStyles(name, descriptor) {
  const { offset, pull, push, size } = descriptor;
  const classes = [];

  if (offset > 0) {
    classes.push(styles[`offset${name}${offset}`]);
  }

  if (pull > 0) {
    classes.push(styles[`pull${name}${pull}`]);
  }

  if (push > 0) {
    classes.push(styles[`push${name}${push}`]);
  }

  if (size > 0) {
    classes.push(styles[`col${name}${size}`]);
  }

  return classes;
}

const ColumnDescriptorPropType = PropTypes.shape({
  offset: PropTypes.number,
  pull: PropTypes.number,
  push: PropTypes.number,
  size: PropTypes.number,
});

function Column(props) {
  const {
    children, className,
    largeOffset, largePull, largePush, largeSize, large,
    mediumOffset, mediumPull, mediumPush, mediumSize, medium,
    smallOffset, smallPull, smallPush, smallSize, small,
    xLargeOffset, xLargePull, xLargePush, xLargeSize, xLarge,
    xSmallOffset, xSmallPull, xSmallPush, xSmallSize, xSmall,
    ...other
  } = props;

  const largeDescr = buildDescriptor(largeOffset, largePull, largePush, largeSize, large);
  const mediumDescr = buildDescriptor(mediumOffset, mediumPull, mediumPush, mediumSize, medium);
  const smallDescr = buildDescriptor(smallOffset, smallPull, smallPush, smallSize, small);
  const xLargeDescr = buildDescriptor(xLargeOffset, xLargePull, xLargePush, xLargeSize, xLarge);
  const xSmallDescr = buildDescriptor(xSmallOffset, xSmallPull, xSmallPush, xSmallSize, xSmall);

  const columnClassName = classNames(
    className,
    styles.column,
    getColumnStyles('Lg', largeDescr),
    getColumnStyles('Md', mediumDescr),
    getColumnStyles('Sm', smallDescr),
    getColumnStyles('Xl', xLargeDescr),
    getColumnStyles('Xs', xSmallDescr),
  );

  return (
    <div {...other} className={columnClassName}>
      {children}
    </div>
  );
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  // large
  largeOffset: PropTypes.number,
  largePull: PropTypes.number,
  largePush: PropTypes.number,
  largeSize: PropTypes.number,
  large: ColumnDescriptorPropType,

  // medium
  mediumOffset: PropTypes.number,
  mediumPull: PropTypes.number,
  mediumPush: PropTypes.number,
  mediumSize: PropTypes.number,
  medium: ColumnDescriptorPropType,

  // small
  smallOffset: PropTypes.number,
  smallPull: PropTypes.number,
  smallPush: PropTypes.number,
  smallSize: PropTypes.number,
  small: ColumnDescriptorPropType,

  // xLarge
  xLargeOffset: PropTypes.number,
  xLargePull: PropTypes.number,
  xLargePush: PropTypes.number,
  xLargeSize: PropTypes.number,
  xLarge: ColumnDescriptorPropType,

  // xSmall
  xSmallOffset: PropTypes.number,
  xSmallPull: PropTypes.number,
  xSmallPush: PropTypes.number,
  xSmallSize: PropTypes.number,
  xSmall: ColumnDescriptorPropType,
};

Column.defaultProps = {
  // large
  largeOffset: 0,
  largePull: 0,
  largePush: 0,
  largeSize: 0,
  large: null,

  // medium
  mediumOffset: 0,
  mediumPull: 0,
  mediumPush: 0,
  mediumSize: 0,
  medium: null,

  // small
  smallOffset: 0,
  smallPull: 0,
  smallPush: 0,
  smallSize: 0,
  small: null,

  // xLarge
  xLargeOffset: 0,
  xLargePull: 0,
  xLargePush: 0,
  xLargeSize: 0,
  xLarge: null,

  // xSmall
  xSmallOffset: 0,
  xSmallPull: 0,
  xSmallPush: 0,
  xSmallSize: 1,
  xSmall: null,
};

export default Column;
