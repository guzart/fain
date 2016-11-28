// @flow

import React from 'react';

import Button from '../buttons/button';

// TODO: create a FormLoaderButton that gets form context isSubmitting status and
// passes it as a showLoader prop

function FormButton(props: any) {
  return (
    <Button {...props} type="submit" />
  );
}

export default FormButton;
