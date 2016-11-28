// @flow

import { css } from 'styled-components';

const clearfix = () => css`
  &::after {
    clear: both;
    content: "";
    display: table;
  }
`;

export default clearfix;
