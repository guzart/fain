// @flow

import { css } from 'styled-components';

import type { ComponentProps, LayoutSizeName, GridGutterWidths, Theme } from '../types.js.flow';
import { div, extractTheme } from '../helpers/theme';
import flexEnabled from '../helpers/flexEnabled';

import clearfix from './clearfix';
import { mediaBreakpointUp } from './mediaBreakpoint';


// TODO: https://github.com/facebook/flow/issues/2645
const layoutSizes: LayoutSizeName[] = ['xs', 'sm', 'md', 'lg', 'xl'];

type MakeGuttersOptions = {
  gridGutterWidths?: GridGutterWidths,
};

const makeGutters = (options?: MakeGuttersOptions) =>
  (props: ComponentProps) => {
    const opts = Object.assign({}, options);
    const theme: Theme = extractTheme(props);

    const gridGutterWidths: GridGutterWidths = opts.gridGutterWidths || theme.gridGutterWidths;
    return layoutSizes
      .map(breakpoint =>
        mediaBreakpointUp(breakpoint)(css`
          padding-left: ${div(gridGutterWidths[breakpoint], 2)};
          padding-right: ${div(gridGutterWidths[breakpoint], 2)};
        `),
      );
  };

export default makeGutters;
