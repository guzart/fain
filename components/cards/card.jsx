// @flow

import styled from 'styled-components';

import { borderRadius } from '../../utils/feature';
import { themeProperty } from '../../utils/theme';

const Card = styled.div`
  ${borderRadius(t => t.cardBorderRadius)}
  background-color: ${themeProperty(t => t.cardBg)};
  border-color: ${themeProperty(t => t.cardBorderColor)};
  border-style: solid;
  border-width: ${themeProperty(t => t.cardBorderWidth)};
  display: block;
  margin-bottom: ${themeProperty(t => t.cardSpacerY)};
  position: relative;
`;

export default Card;
