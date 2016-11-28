// @flow

export function titleize(value: string) {
  const title = value.replace(/-/g, ' ');
  return `${title[0].toUpperCase()}${title.substring(1)}`;
}
