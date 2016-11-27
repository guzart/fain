// @flow

import styled from 'styled-components';

import { clearfix } from '../../utils/feature';
import { themeProperty } from '../../utils/theme';

const CardBlock = styled.div`
  ${clearfix()}
  padding: ${themeProperty(t => t.cardSpacerX)};
`;

export default CardBlock;
