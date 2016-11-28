// @flow

import React from 'react';
import styled from 'styled-components';

import { themeProperty } from '../../helpers/theme';

type Props = {
  typeName: string | Function,
};

function CardTitleBase({ typeName, ...other }: Props) {
  const TypeName = typeName;
  return <TypeName {...other} />;
}

CardTitleBase.defaultProps = {
  typeName: 'h2',
};

const CardTitle = styled(CardTitleBase)`
  margin-bottom: ${themeProperty(t => t.cardSpacerY)};
`;

export default CardTitle;
