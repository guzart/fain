import { css } from 'styled-components';

export const clearfix = () => css`
  &::after {
    clear: both;
    content: "";
    display: table;
  }
`;
