'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderInnerLabel(label, className) {
  if (!label) {
    return null;
  }
  return _react2.default.createElement(
    'span',
    { 'aria-hidden': 'true', className: className },
    label
  );
}

function renderContent(srLabel) {
  if (!srLabel) {
    return null;
  }
  return _react2.default.createElement(
    'span',
    { className: _index2.default.showForSR },
    srLabel
  );
}

function Switch(props) {
  var _classNames;

  var activeLabel = props.activeLabel,
      Container = props.componentClass,
      inactiveLabel = props.inactiveLabel,
      inputClassName = props.inputClassName,
      labelClassName = props.labelClassName,
      srLabel = props.srLabel,
      other = (0, _objectWithoutProperties3.default)(props, ['activeLabel', 'componentClass', 'inactiveLabel', 'inputClassName', 'labelClassName', 'srLabel']);

  var innerId = props.id || props.name;
  var switchCN = (0, _classnames2.default)(props.className, _index2.default.switch, (_classNames = {}, (0, _defineProperty3.default)(_classNames, _index2.default.large, props.size === 'large'), (0, _defineProperty3.default)(_classNames, _index2.default.small, props.size === 'small'), (0, _defineProperty3.default)(_classNames, _index2.default.tiny, props.size === 'tiny'), _classNames));

  return _react2.default.createElement(
    Container,
    { className: switchCN },
    _react2.default.createElement('input', (0, _extends3.default)({}, other, {
      className: (0, _classnames2.default)(inputClassName, _index2.default.switchInput),
      id: innerId,
      type: props.type,
      name: props.name
    })),
    _react2.default.createElement(
      'label',
      {
        className: (0, _classnames2.default)(labelClassName, _index2.default.switchPaddle),
        htmlFor: innerId
      },
      renderContent(srLabel),
      renderInnerLabel(activeLabel, _index2.default.switchActive),
      renderInnerLabel(inactiveLabel, _index2.default.switchInactive)
    )
  );
}

Switch.defaultProps = {
  componentClass: 'div',
  type: 'checkbox'
};

exports.default = Switch;