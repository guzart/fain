// @flow

import styled, { css } from 'styled-components';

import type { LayoutSizeName } from '../../types.js.flow';

import flexEnabled from '../../helpers/flexEnabled';
import { extractTheme } from '../../helpers/theme';
import makeGutters from '../../mixins/makeGutters';
import { mediaBreakpointUp } from '../../mixins/mediaBreakpoint';

// TODO: https://github.com/facebook/flow/issues/2645
const layoutSizes: LayoutSizeName[] = ['xs', 'sm', 'md', 'lg', 'xl'];

type ColumnDescriptor = {
  auto?: boolean,
  offset?: number,
  pull?: number,
  push?: number,
  size?: number,
};

type ColumnDescriptorProps = {
  [key: LayoutSizeName | string]: boolean | ColumnDescriptor,
};

function getBasicStyles(props: any) {
  const theme = extractTheme(props);
  return layoutSizes.map((breakpoint) => {
    const descr = props[breakpoint] || {};
    const size = (typeof descr === 'boolean' ? 1 : descr.size) || 0;
    return mediaBreakpointUp(breakpoint)(flexEnabled(
      css`
        flex: 0 0 percent(${size / theme.gridColumns});
      `,
      css``,
    ));
  });
}

function isAutoColumn(props: ColumnDescriptorProps) {
  return layoutSizes.reduce((acc, name) => {
    if (acc) { return acc; }

    const descr = props[name];
    return descr && typeof descr !== 'boolean' && descr.auto;
  }, false);
}

function getAutoStyle(props: ColumnDescriptorProps) {
  if (!isAutoColumn(props)) { return ''; }
  return css`
    flex: 0 0 auto;
    width: auto;
  `;
}

const makeColumn = () => (props: ColumnDescriptorProps) => css`
  min-height: 1px;
  position: relative;
  ${flexEnabled(`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
  `)}
  ${makeGutters()}

  ${getAutoStyle(props)}
  ${getBasicStyles(props)}
`;

const Column = styled.div`
  ${makeColumn()}
`;

export default Column;

// import classNames from 'classnames';
// import React from 'react';
//
// import type { ClassName } from '../../types.js.flow';
// import styles from './styles.scss';
//
// type ColumnDescriptor = {
//   offset?: number,
//   pull?: number,
//   push?: number,
//   size?: number,
// };
//
// function buildDescriptor(
//   offset?: number, pull?: number, push?: number, size?: number, base?: ColumnDescriptor,
// ) {
//   const defaults = { offset: 0, pull: 0, push: 0, size: 0 };
//   return Object.assign(defaults, { offset, pull, push, size }, base || {});
// }
//
// function getColumnStyles(name: string, descriptor: ColumnDescriptor) {
//   const { offset, pull, push, size } = descriptor;
//   const classes = [];
//
//   if (offset && offset > 0) {
//     classes.push(styles[`offset${name}${offset}`]);
//   }
//
//   if (pull && pull > 0) {
//     classes.push(styles[`pull${name}${pull}`]);
//   }
//
//   if (push && push > 0) {
//     classes.push(styles[`push${name}${push}`]);
//   }
//
//   if (size && size > 0) {
//     classes.push(styles[`col${name}${size}`]);
//   }
//
//   return classes;
// }
//
// type Props = {
//   children?: React.Element<*>,
//   className?: ClassName,
//
//   // large
//   largeOffset?: number,
//   largePull?: number,
//   largePush?: number,
//   largeSize?: number,
//   large?: ColumnDescriptor,
//
//   // medium
//   mediumOffset?: number,
//   mediumPull?: number,
//   mediumPush?: number,
//   mediumSize?: number,
//   medium?: ColumnDescriptor,
//
//   // small
//   smallOffset?: number,
//   smallPull?: number,
//   smallPush?: number,
//   smallSize?: number,
//   small?: ColumnDescriptor,
//
//   // xLarge
//   xLargeOffset?: number,
//   xLargePull?: number,
//   xLargePush?: number,
//   xLargeSize?: number,
//   xLarge?: ColumnDescriptor,
//
//   // xSmall
//   xSmallOffset?: number,
//   xSmallPull?: number,
//   xSmallPush?: number,
//   xSmallSize?: number,
//   xSmall?: ColumnDescriptor,
// };
//
// function Column(props: Props) {
//   const {
//     children, className,
//     largeOffset, largePull, largePush, largeSize, large,
//     mediumOffset, mediumPull, mediumPush, mediumSize, medium,
//     smallOffset, smallPull, smallPush, smallSize, small,
//     xLargeOffset, xLargePull, xLargePush, xLargeSize, xLarge,
//     xSmallOffset, xSmallPull, xSmallPush, xSmallSize, xSmall,
//     ...other
//   } = props;
//
//   const largeDescr = buildDescriptor(largeOffset, largePull, largePush, largeSize, large);
//   const mediumDescr = buildDescriptor(mediumOffset, mediumPull, mediumPush, mediumSize, medium);
//   const smallDescr = buildDescriptor(smallOffset, smallPull, smallPush, smallSize, small);
//   const xLargeDescr = buildDescriptor(xLargeOffset, xLargePull, xLargePush, xLargeSize, xLarge);
//   const xSmallDescr = buildDescriptor(xSmallOffset, xSmallPull, xSmallPush, xSmallSize, xSmall);
//
//   const columnClassName = classNames(
//     className,
//     styles.column,
//     getColumnStyles('Lg', largeDescr),
//     getColumnStyles('Md', mediumDescr),
//     getColumnStyles('Sm', smallDescr),
//     getColumnStyles('Xl', xLargeDescr),
//     getColumnStyles('Xs', xSmallDescr),
//   );
//
//   return (
//     <div {...other} className={columnClassName}>
//       {children}
//     </div>
//   );
// }
//
// Column.defaultProps = {
//   // large
//   largeOffset: 0,
//   largePull: 0,
//   largePush: 0,
//   largeSize: 0,
//   large: null,
//
//   // medium
//   mediumOffset: 0,
//   mediumPull: 0,
//   mediumPush: 0,
//   mediumSize: 0,
//   medium: null,
//
//   // small
//   smallOffset: 0,
//   smallPull: 0,
//   smallPush: 0,
//   smallSize: 0,
//   small: null,
//
//   // xLarge
//   xLargeOffset: 0,
//   xLargePull: 0,
//   xLargePush: 0,
//   xLargeSize: 0,
//   xLarge: null,
//
//   // xSmall
//   xSmallOffset: 0,
//   xSmallPull: 0,
//   xSmallPush: 0,
//   xSmallSize: 1,
//   xSmall: null,
// };
//
// export default Column;
