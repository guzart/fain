// @flow

import omit from 'lodash/omit';
import React from 'react';


import FormCheck from './form_check';
import FormCheckInput from './form_check_input';
import FormCheckLabel from './form_check_label';

type Props = {
  id: string,
  label: React.Element<*>,
};

function FormCheckbox(props: Props) {
  const inputProps = omit(props, ['label']);

  return (
    <FormCheck>
      <FormCheckLabel htmlFor={props.id}>
        <FormCheckInput {...inputProps} type="checkbox" />
        {' '}
        {props.label}
      </FormCheckLabel>
    </FormCheck>
  );
}

export default FormCheckbox;
