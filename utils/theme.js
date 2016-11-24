// @flow

type Theme = Object;
type ComponentProps = { theme: Theme };
type CSSValue = any;
type Interpolation = Function | string | number;
type StyleFn = (...args: CSSValue[]) => Interpolation;

// TODO: Improve names names
//  1. Fn that props => theme (props => props.theme) (themeLens?)
//  2. Fn that theme => componentTheme  (theme => theme.button) (componentThemeLens?)
//  3. Fn that componentTheme => styleVariantTheme (buttonTheme => buttonTheme.large)
//  4. Fn that anyTheme => cssValue

export type ThemeLens = (x: Theme) => ?Theme;
export type PropertyLens = (x: Theme) => CSSValue;

export const themePropLens = // eslint-disable-line
  (themeLens: ThemeLens) =>
    (propLens: PropertyLens) =>
      (props: ComponentProps): CSSValue => propLens(themeLens(props.theme) || {});

export const themeFeatureLens = themePropLens(t => t.features);

export const themeFeature =
  (featureLens: PropertyLens, themeLens: ThemeLens, style: StyleFn) =>
  (...propLenses: PropertyLens[]) =>
  (props: ComponentProps): Interpolation => {
    if (!themeFeatureLens(featureLens)(props)) {
      return '';
    }

    const args = propLenses.map(themeLens).map(f => f(props));
    return style(...args);
  };
