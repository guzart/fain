// @flow

import { css } from 'styled-components';

import { extractTheme } from './theme';
import type { ComponentProps, CSSValue, PropertyLens, StyleFn } from '../types.js.flow';

const evalFunctions = (list: Array<Function>, args: any[]): Array<CSSValue> =>
  list.map(item => (typeof item === 'function' ? item(...args) : item));

export const featureGate =
  (featureLens: PropertyLens) =>
    (styleAction: StyleFn, altStyleAction?: StyleFn) =>
      (...args: any[]) =>
        (props: ComponentProps): string => {
          const theme = extractTheme(props);
          const styleArgs = evalFunctions(args, [theme, props]);

          if (featureLens(theme)) {
            return styleAction(...styleArgs);
          } else if (altStyleAction != null) {
            return altStyleAction(...styleArgs);
          }

          return '';
        };


export const flexFeature = featureGate(t => t.enableFlex);
export const roundedFeature = featureGate(t => t.enableRounded);
export const shadowsFeature = featureGate(t => t.enableShadows);
export const transitionsFeature = featureGate(t => t.enableTransitions);
export const hoverMediaQueryFeature = featureGate(t => t.enableHoverMediaQuery);

export const borderRadius = roundedFeature(
  (value: CSSValue) => `border-radius: ${value};`,
  () => 'border-radius: 0;',
);

export const boxShadow = shadowsFeature(
  (value: CSSValue) => `box-shadow: ${value};`,
);

export const flexEnabled = flexFeature(
  (enabledStyle: any) => enabledStyle,
  (_, disabledStyle: any) => disabledStyle,
);

export const hover = hoverMediaQueryFeature(
  (...args: any[]) => css`@media (hover: hover) { ${css(...args)} }`,
  (...args: any[]) => css`&:hover { ${css(...args)} }`,
);

export const hoverFocus = hoverMediaQueryFeature(
  (...args: any[]) => css`
    &:focus { ${css(...args)} }
    ${hover(...args)}
  `,
  (...args: any[]) => css`
    &:focus { ${css(...args)} }
    ${hover(...args)}
  `,
);

export const transition = transitionsFeature(
  (value: CSSValue) => `transition: ${value};`,
);
