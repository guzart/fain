// @flow

import { extractTheme } from '../helpers/theme';
import type { ComponentProps, CSSValue, PropertyLens, StyleFn } from '../types.js.flow';

const evalFunctions = (list: Array<Function>, args: any[]): Array<CSSValue> =>
  list.map(item => (typeof item === 'function' ? item(...args) : item));

const featureGate =
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
