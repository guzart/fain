// @flow

export function titleize(value) {
  const title = value.replace(/-/g, ' ');
  return `${title[0].toUpperCase()}${title.substring(1)}`;
}
