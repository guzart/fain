import styled from 'styled-components';

import { mult, themeProperty } from '../../helpers/theme';

const FormCheck = styled.div`
  display: block;
  margin-bottom: ${themeProperty(t => mult(t.spacer, 0.75))};
  position: relative;

  & + & {
    margin-top: -.25rem;
  }
`;

export default FormCheck;
