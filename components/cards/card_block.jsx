// @flow

import styled from 'styled-components';

import clearfix from '../../mixins/clearfix';
import { themeProperty } from '../../helpers/theme';

const CardBlock = styled.div`
  ${clearfix()}
  padding: ${themeProperty(t => t.cardSpacerX)};
`;

export default CardBlock;
