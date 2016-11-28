// @flow

import styled from 'styled-components';

import { mult, themeProperty } from '../../utils/theme';

const FormFeedback = styled.div`
  margin-top: ${themeProperty(t => mult(t.spacer, 0.25))}
`;

export default FormFeedback;
