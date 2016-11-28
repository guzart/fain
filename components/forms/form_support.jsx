// @flow

import styled from 'styled-components';

import { textMuted } from '../../mixins/text';
import { mult, themeProperty } from '../../utils/theme';

const FormSupport = styled.small`
  display: block;
  margin-top: ${themeProperty(t => mult(t.spacer, 0.25))}
  ${textMuted()}
`;

export default FormSupport;
