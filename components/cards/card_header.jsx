// @flow

import React from 'react';
import styled from 'styled-components';

import { clearfix } from '../../mixins/clearfix';
import { themeProperty } from '../../utils/theme';

type Props = {
  typeName: string | Function,
};

function CardHeaderBase({ typeName, ...other }: Props) {
  const TypeName = typeName;
  return <TypeName {...other} />;
}

CardHeaderBase.defaultProps = {
  typeName: 'div',
};

const CardHeader = styled(CardHeaderBase)`
  ${clearfix()}
  background-color: ${themeProperty(t => t.cardCapBg)};
  border-bottom-color: ${themeProperty(t => t.cardBorderColor)};
  border-bottom-style: solid;
  border-bottom-width: ${themeProperty(t => t.cardBorderWidth)};
  margin-bottom: 0;
  padding: ${themeProperty(t => `${t.cardSpacerY} ${t.cardSpacerX}`)};
`;

export default CardHeader;
