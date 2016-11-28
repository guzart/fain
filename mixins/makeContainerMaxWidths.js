// @flow

import { css } from 'styled-components';

import type { ComponentProps, ContainerMaxWidthsName, ContainerMaxWidths, Theme } from '../types.js.flow';
import { extractTheme } from '../helpers/theme';

import { mediaBreakpointUp } from './mediaBreakpoint';


// TODO: https://github.com/facebook/flow/issues/2645
const widthNames: ContainerMaxWidthsName[] = ['sm', 'md', 'lg', 'xl'];

type MakeContainerOptions = {
  containerMaxWidths?: ContainerMaxWidths,
};

const makeContainerMaxWidths = (options?: MakeContainerOptions) =>
  (props: ComponentProps) => {
    const opts = Object.assign({}, options);
    const theme: Theme = extractTheme(props);

    const containerMaxWidths = opts.containerMaxWidths || theme.containerMaxWidths;
    const breakpointsStyle = widthNames.map(breakpoint =>
      mediaBreakpointUp(breakpoint)(css`
        max-width: 100%;
        width: ${containerMaxWidths[breakpoint]};
      `),
    );

    return css`
      ${breakpointsStyle}
    `;
  };

export default makeContainerMaxWidths;
