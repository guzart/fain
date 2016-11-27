// @flow

import React from 'react';
import styled from 'styled-components';

import { themeProperty } from '../../utils/theme';

type Props = {
  typeName: string | Function,
};

function CardTitleBase({ typeName, ...other }: Props) {
  const TypeName = typeName;
  return <TypeName {...other} />;
}

CardTitleBase.defaultProps = {
  typeName: 'h6',
};

const CardTitle = styled(CardTitleBase)`
  margin-bottom: 0;
  margin-top: ${themeProperty(t => -(t.cardSpacerY / 2))};
`;

export default CardTitle;
