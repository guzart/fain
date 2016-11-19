// @flow

import React from 'react';

import FormControl from './form_control';
import FormGroup from './form_group';
import FormLabel from './form_label';

type Props = {
  id: string,
  label: string,
};

function FormInputGroup(props: Props) {
  const { id, label, ...other } = props;

  return (
    <FormGroup>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormControl {...other} id={id} />
    </FormGroup>
  );
}

export default FormInputGroup;
