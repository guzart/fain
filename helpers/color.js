// @flow

import chroma from 'chroma-js';

export const darken = (value: number, color: string) =>
  chroma(color).darken(value).toString();

export const lighten = (value: number, color: string) =>
  chroma(color).brighten(value).toString();
