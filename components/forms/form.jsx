// @flow

import classNames from 'classnames';
import merge from 'lodash/merge';
import omit from 'lodash/omit';
import reduce from 'lodash/reduce';
import React from 'react';

type Props = {
  children?: React.Element<*>,
  className?: ClassName,
  onSubmit: Function,
};

const getInputName = (node: HTMLInputElement) =>
  (node.getAttribute('name') || node.getAttribute('id')).toString();

const getInputValue = (node: HTMLInputElement): any => {
  if (node.getAttribute('type') === 'checkbox') {
    return node.checked;
  }

  return node.value;
};

const getNodeData = (name: string, value: any) => {
  const data = { [name]: value };
  if (name.indexOf('[') === -1) {
    return data;
  }

  const firstName = name.replace(/\[.*$/, '');
  const otherNames = name.replace(/.*?\[(.*?)](.*)$/, '$1$2');
  return { [firstName]: getNodeData(otherNames, value) };
};

const getFormData = (formNode: HTMLFormElement) =>
  reduce(
    formNode.elements,
    (result, node) => {
      if (node.getAttribute('type') === 'submit') {
        return result;
      }

      return merge(result, getNodeData(getInputName(node), getInputValue(node)));
    },
    {},
  );

class Form extends React.Component {
  onSubmitHandler = (event: Object) => {
    event.preventDefault();
    const data = getFormData(this.formNode);
    this.props.onSubmit(data, event, this.formNode);
    return false;
  }

  props: Props;

  formNode: Object;

  render() {
    const { children, className } = this.props;
    const formProps = omit(this.props, ['children']);

    return (
      <form
        {...formProps}
        className={classNames(className)}
        onSubmit={this.onSubmitHandler}
        ref={(node) => { this.formNode = node; }}
      >
        {children}
      </form>
    );
  }
}

export default Form;
