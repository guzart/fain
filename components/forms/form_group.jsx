// @flow

import styled, { css } from 'styled-components';

import flexEnabled from '../../helpers/flexEnabled';
import { mediaBreakpointUp } from '../../mixins/mediaBreakpoint';
import { themeProperty } from '../../helpers/theme';

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
