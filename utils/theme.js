// @flow

import type { Theme } from '../theme';
import type { ComponentProps, CSSValue, StyleFn } from '../types.js.flow';

type PropertyLens = (t: Theme) => CSSValue;

export const extractTheme =
  (props: ComponentProps): Theme =>
    props.theme;

export const themeProperty =
  (propertyLens: PropertyLens) =>
    (props: ComponentProps) =>
      propertyLens(extractTheme(props));

export const roundedFeature =
  (styleAction: StyleFn) =>
    (theme: Theme, ...args: any[]): string => {
      if (!theme.enableRounded) {
        return '';
      }

      return styleAction(...args);
    };
