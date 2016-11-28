// @flow

import omit from 'lodash/omit';
import React, { PropTypes } from 'react';

import FormControl from './form_control';
import FormFeedback from './form_feedback';
import FormLabel from './form_label';
import FormGroup from './form_group';
import FormSupport from './form_support';

type Props = {
  danger?: boolean,
  feedback?: string | React.Element<*>,
  id: string,
  label: string,
  success?: boolean,
  support?: string,
  warning?: boolean,
};

class FormInput extends React.Component {
  static childContextTypes = {
    danger: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  };

  static defaultProps = {
    danger: false,
    success: false,
    warning: false,
  };

  getChildContext() {
    const { danger, success, warning } = this.props;
    return { danger, success, warning };
  }

  props: Props;

  renderSupport() {
    const { support } = this.props;
    if (!support) {
      return null;
    }

    return (
      <FormSupport>{support}</FormSupport>
    );
  }

  renderFeedback() {
    const { feedback } = this.props;
    if (!feedback) {
      return null;
    }

    return (
      <FormFeedback>{feedback}</FormFeedback>
    );
  }

  render() {
    const { id, label, ...other } = this.props;
    const controlProps = omit(
      other,
      ['danger', 'feedback', 'help', 'success', 'support', 'warning'],
    );

    return (
      <FormGroup>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <FormControl {...controlProps} id={id} />
        {this.renderFeedback()}
        {this.renderSupport()}
      </FormGroup>
    );
  }
}

export default FormInput;
