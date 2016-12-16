'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../Button/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Anchor(props) {
  var buttonCN = (0, _classnames2.default)(props.className, _index2.default.button, _index2.default[props.size], {
    disabled: props.disabled,
    expanded: props.expanded
  });

  return _react2.default.createElement(
    'a',
    (0, _extends3.default)({}, props, {
      ariaDisabled: props.disabled,
      className: buttonCN
    }),
    props.children
  );
}

Anchor.defaultProps = {
  expanded: false,
  size: 'default'
};

exports.default = Anchor;