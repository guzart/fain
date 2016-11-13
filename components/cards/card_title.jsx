import classNames from 'classnames';
import React, { PropTypes } from 'react';

import styles from './styles.scss';

class CardTitle extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    typeName: PropTypes.string,
  };

  static defaultProps = {
    typeName: 'h2',
  };

  render() {
    const TypeName = this.props.typeName;

    return (
      <TypeName className={classNames(this.props.className, styles.title)}>
        {this.props.children}
      </TypeName>
    );
  }
}

export default CardTitle;
