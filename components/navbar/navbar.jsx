import classNames from 'classnames';
import omit from 'lodash/omit';
import React, { PropTypes } from 'react';

import * as FainPropTypes from '../../proptypes';
import backgrounds from '../../utils/backgrounds.scss';

import styles from './styles.scss';

class Navbar extends React.Component {
  static childContextTypes = {
    navbarTheme: FainPropTypes.navbarTheme,
  };

  static propTypes = {
    backgroundTheme: FainPropTypes.backgroundTheme,
    children: PropTypes.node,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    theme: FainPropTypes.navbarTheme,
  };

  static defaultProps = {
    backgroundTheme: 'faded',
    theme: 'light',
  };

  getChildContext() {
    return { navbarTheme: this.props.theme };
  }

  render() {
    const { backgroundTheme, children, className, ...other } = this.props;
    const props = omit(other, ['theme']);
    const nodeClassName = classNames(
      className,
      styles.navbar,
      backgrounds[backgroundTheme],
    );

    return (
      <div {...props} className={nodeClassName}>
        {children}
      </div>
    );
  }
}

export default Navbar;
