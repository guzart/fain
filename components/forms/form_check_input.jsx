import styled from 'styled-components';

const FormCheckInput = styled.input`
  position: absolute;
  margin-top: .25rem;
  margin-left: -1.25rem;

  &:only-child {
    position: static;
  }
`;

export default FormCheckInput;
