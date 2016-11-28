// @flow

import React from 'react';
import styled, { css } from 'styled-components';

import borderRadius from '../../mixins/borderRadius';
import boxShadow from '../../mixins/boxShadow';
import transition from '../../mixins/transition';
import { mult, themeProperty } from '../../helpers/theme';

type Props = {
  typeName: string | Function,
};

function FormControlBase({ typeName, ...other }: Props) {
  const TypeName = typeName;
  return <TypeName {...other} />;
}

FormControlBase.defaultProps = {
  typeName: 'input',
};

const FormControl = styled(FormControlBase)`
  background-clip: padding-box;
  background-color: ${themeProperty(t => t.inputBg)};
  background-image: none;
  border: ${themeProperty(t => `${t.inputBtnBorderWidth} solid ${t.inputBorderColor}`)};
  ${borderRadius(t => t.inputBorderRadius)}
  ${boxShadow(t => t.inputBoxShadow)}
  color: ${themeProperty(t => t.inputColor)};
  display: block;
  font-size: ${themeProperty(t => t.fontSizeBase)};
  line-height: ${themeProperty(t => t.inputLineHeight)};
  padding: ${themeProperty(t => `${t.inputPaddingY} ${t.inputPaddingX}`)};
  ${transition('border-color ease-in-out .15s, box-shadow ease-in-out .15s')}
  width: 100%;

  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }

  &:focus {
    background-color: ${themeProperty(t => t.inputBgFocus)};
    border-color: ${themeProperty(t => t.inputBorderFocus)};
    color: ${themeProperty(t => t.inputColorFocus)};
    outline: none;
    ${boxShadow(t => t.inputBoxShadowFocus)}
  }

  &::placeholder {
    color: ${themeProperty(t => t.inputColorPlaceholder)};
    opacity: 1;
  }

  &:disabled,
  &[readonly] {
    background-color: ${themeProperty(t => t.inputBgDisabled)};
    opacity: 1;
  }

  &:disabled {
    cursor: ${themeProperty(t => t.cursorDisabled)};
  }

  ${props => (props.typeName !== 'select' ? '' : css`
    &:not([size]):not([multiple]) {
      height: ${themeProperty(t => `calc(${t.inputHeight} - ${mult(t.borderWidth, 2)})`)(props)};
    }

    &:focus::-ms-value {
      color: ${themeProperty(t => t.inputColor)(props)};
      background-color: ${themeProperty(t => t.inputBg)(props)};
    }
  `)}

  ${props => (props.typeName !== 'file' ? '' : css`
    display: block;
  `)}
`;

export default FormControl;
