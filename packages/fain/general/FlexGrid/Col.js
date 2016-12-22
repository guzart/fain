'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAlignSelfClassName(alignSelf) {
  if (!alignSelf) {
    return null;
  }
  return _index2.default['align-self-' + alignSelf];
}

function getOffsetClassName(offset) {
  if (!offset) {
    return null;
  }
  return (0, _keys2.default)(offset).map(function (name) {
    return _index2.default[name + '-offset-' + offset[name]];
  });
}

function getOrderClassName(order) {
  if (!order) {
    return null;
  }
  return (0, _keys2.default)(order).map(function (name) {
    return _index2.default[name + '-order-' + order[name]];
  });
}

function getSizeClassName(size) {
  if (!size) {
    return null;
  }
  return (0, _keys2.default)(size).map(function (name) {
    return _index2.default[name + '-' + size[name]];
  });
}

function FlexGridCol(props) {
  var alignSelf = props.alignSelf,
      offset = props.offset,
      order = props.order,
      size = props.size,
      other = (0, _objectWithoutProperties3.default)(props, ['alignSelf', 'offset', 'order', 'size']);

  var colClassName = (0, _classnames2.default)(props.className, _index2.default.columns, getAlignSelfClassName(alignSelf), getOffsetClassName(offset), getOrderClassName(order), getSizeClassName(size));

  return _react2.default.createElement('div', (0, _extends3.default)({}, other, {
    className: colClassName
  }));
}

exports.default = FlexGridCol;