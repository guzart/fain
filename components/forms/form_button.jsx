// @flow

import omit from 'lodash/omit';
import React from 'react';

import Button from '../buttons/button';

type Props = {
  children: React.Element<*>,
};

function FormButton(props: Props) {
  const buttonProps = omit(props, ['children']);
  return (
    <Button {...buttonProps} type="submit">
      {props.children}
    </Button>
  );
}

export default FormButton;
