// @flow

import type { Theme } from '../theme';
import type { ComponentProps, PropertyLens } from '../types.js.flow';

export const extractTheme =
  (props: ComponentProps): Theme =>
    props.theme;

export const themeProperty =
  (propertyLens: PropertyLens) =>
    (props: ComponentProps) =>
      propertyLens(extractTheme(props));
