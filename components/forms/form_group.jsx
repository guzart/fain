// @flow

import styled, { css } from 'styled-components';

import { flexEnabled } from '../../utils/feature';
import { mediaBreakpointUp } from '../../utils/layout';
import { themeProperty } from '../../utils/theme';

const FormGroup = styled.div`
  margin-bottom: ${themeProperty(t => t.formGroupMarginBottom)};

  ${mediaBreakpointUp('sm')(flexEnabled(
    css`
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
    `,
    css`
      display: inline-block;
      vertical-align: middle;
    `,
  ))}
`;

export default FormGroup;
