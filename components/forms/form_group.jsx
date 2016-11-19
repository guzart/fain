// @flow

import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

type Props = {
  children?: React.Element<*>,
  className?: ClassName,
  danger: boolean,
  feedback?: string,
  success: boolean,
  support?: string,
  warning: boolean,
};

class FormGroup extends React.Component {
  static childContextTypes = {
    danger: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
  }

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
      <div className={styles.text}>{support}</div>
    );
  }

  renderFeedback() {
    const { feedback } = this.props;
    if (!feedback) {
      return null;
    }

    return (
      <div className={styles.controlFeedback}>{feedback}</div>
    );
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={classNames(className, styles.formGroup)}>
        {children}
        {this.renderFeedback()}
        {this.renderSupport()}
      </div>
    );
  }
}


export default FormGroup;
