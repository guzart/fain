// @flow

import styled, { css } from 'styled-components';

import { themeProperty } from '../../helpers/theme';

const FormCheckLabel = styled.label`
  padding-left: 1.25rem;
  margin-bottom: 0;
  cursor: pointer;

  ${props => (!props.disabled ? '' : css`
    color: ${themeProperty(t => t.textMuted)(props)};
    cursor: ${themeProperty(t => t.cursorDisabled)(props)};
  `)}
`;

export default FormCheckLabel;
