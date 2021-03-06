'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardSection(props) {
  var Component = props.componentClass,
      other = (0, _objectWithoutProperties3.default)(props, ['componentClass']);

  return _react2.default.createElement(Component, (0, _extends3.default)({}, other, {
    className: (0, _classnames2.default)(props.className, _index2.default.cardSection)
  }));
}

CardSection.defaultProps = {
  componentClass: 'div'
};

exports.default = CardSection;