// @flow

import classNames from 'classnames';
import React from 'react';

import styles from './Switch.scss';

type Props = {
  activeLabel?: string,
  className?: ClassName,
  componentClass: string,
  id?: string,
  inactiveLabel?: string,
  inputClassName?: ClassName,
  labelClassName?: ClassName,
  name: string,
  size: 'tiny' | 'small' | 'large',
  srLabel?: string,
  type: 'checkbox' | 'radio',
};

function renderInnerLabel(label?: string, className: ClassName) {
  if (!label) { return null; }
  return <span aria-hidden="true" className={className}>{label}</span>;
}

function renderContent(srLabel?: string) {
  if (!srLabel) { return null; }
  return <span className={styles.showForSR}>{srLabel}</span>;
}

function Switch(props: Props) {
  const { activeLabel, componentClass: Container, inactiveLabel,
          inputClassName, labelClassName, srLabel, ...other } = props;
  const innerId = props.id || props.name;
  const switchCN = classNames(
    props.className,
    styles.switch,
    {
      [styles.large]: props.size === 'large',
      [styles.small]: props.size === 'small',
      [styles.tiny]: props.size === 'tiny',
    },
  );

  return (
    <Container className={switchCN}>
      <input
        {...other}
        className={classNames(inputClassName, styles.switchInput)}
        id={innerId}
        type={props.type}
        name={props.name}
      />
      <label
        className={classNames(labelClassName, styles.switchPaddle)}
        htmlFor={innerId}
      >
        {renderContent(srLabel)}
        {renderInnerLabel(activeLabel, styles.switchActive)}
        {renderInnerLabel(inactiveLabel, styles.switchInactive)}
      </label>
    </Container>
  );
}

Switch.defaultProps = {
  componentClass: 'div',
  type: 'checkbox',
};

export default Switch;
