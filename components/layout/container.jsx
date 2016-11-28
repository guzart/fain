// @flow

import styled from 'styled-components';

import makeContainer from '../../mixins/makeContainer';
import makeContainerMaxWidths from '../../mixins/makeContainerMaxWidths';

import type { ComponentProps } from '../../types.js.flow';

type Props = ComponentProps & {
  fluid?: boolean,
};

const Container = styled.div`
  ${makeContainer()}
  ${(props: Props) => (props.fluid ? '' : makeContainerMaxWidths()(props))}
`;

export default Container;
