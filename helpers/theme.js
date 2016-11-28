// @flow

import type { ComponentProps, PropertyLens, Theme } from '../types.js.flow';

const CSS_VALUE_REGEX = /([0-9.]+)(\w*)/;

function splitUnit(value: string, def?: [number, string]): [number, string] {
  const details = value.match(CSS_VALUE_REGEX);
  if (!details) {
    return def || [0, ''];
  }

  return [parseFloat(details[1]), details[2]];
}

export function div(a: string, b: number): string {
  const [aValue, aUnit] = splitUnit(a);
  return `${aValue / b}${aUnit}`;
}

export function mult(a: string, b: number): string {
  const [aValue, aUnit] = splitUnit(a);
  return `${aValue * b}${aUnit}`;
}

export function sum(a: string, b: string): string {
  const [aValue, aUnit] = splitUnit(a);
  const [bValue] = splitUnit(b);
  return `${aValue + bValue}${aUnit}`;
}

export const extractTheme = (props: ComponentProps): Theme => props.theme;

export const themeProperty =
  (propertyLens: PropertyLens) =>
    (props: ComponentProps) =>
      propertyLens(extractTheme(props));
