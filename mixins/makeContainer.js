// @flow

import { css } from 'styled-components';

import type { ComponentProps, LayoutSizeName, GridGutterWidths, Theme } from '../types.js.flow';
import { div, extractTheme } from '../helpers/theme';
import flexEnabled from '../helpers/flexEnabled';

import clearfix from './clearfix';
import { mediaBreakpointUp } from './mediaBreakpoint';


// TODO: https://github.com/facebook/flow/issues/2645
const layoutSizes: LayoutSizeName[] = ['xs', 'sm', 'md', 'lg', 'xl'];

type MakeContainerOptions = {
  gridGutterWidths?: GridGutterWidths,
};

const makeContainer = (options?: MakeContainerOptions) =>
  (props: ComponentProps) => {
    const opts = Object.assign({}, options);
    const theme: Theme = extractTheme(props);

    const gridGutterWidths: GridGutterWidths = opts.gridGutterWidths || theme.gridGutterWidths;
    const breakpointsStyle = layoutSizes.map(breakpoint =>
      mediaBreakpointUp(breakpoint)(css`
        padding-left: ${div(gridGutterWidths[breakpoint], 2)};
        padding-right: ${div(gridGutterWidths[breakpoint], 2)};
      `),
    );

    return css`
      margin-left: auto;
      margin-right: auto;

      ${flexEnabled('', clearfix())}
      ${breakpointsStyle}
    `;
  };

export default makeContainer;
