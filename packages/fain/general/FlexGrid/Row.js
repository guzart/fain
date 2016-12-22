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

function getAlignClassName(align) {
  if (!align) {
    return null;
  }
  return _index2.default['align-' + align];
}

function getCollapseClassName(collapse) {
  if (!collapse) {
    return null;
  }
  return collapse.map(function (size) {
    return _index2.default[size + '-collapse'];
  });
}

function getSizeUpClassName(sizeUp) {
  if (!sizeUp) {
    return null;
  }
  return (0, _keys2.default)(sizeUp).map(function (name) {
    return _index2.default[name + '-up-' + sizeUp[name]];
  });
}

function getUncollapseClassName(collapse) {
  if (!collapse) {
    return null;
  }
  return collapse.map(function (size) {
    return _index2.default[size + '-uncollapse'];
  });
}

function getUnstackClassName(unstack) {
  if (!unstack) {
    return null;
  }
  return unstack.map(function (size) {
    return _index2.default[size + '-unstack'];
  });
}

function FlexGridRow(props) {
  var align = props.align,
      collapse = props.collapse,
      sizeUp = props.sizeUp,
      uncollapse = props.uncollapse,
      unstack = props.unstack,
      other = (0, _objectWithoutProperties3.default)(props, ['align', 'collapse', 'sizeUp', 'uncollapse', 'unstack']);

  var rowClassName = (0, _classnames2.default)(props.className, _index2.default.row, getAlignClassName(align), getCollapseClassName(collapse), getSizeUpClassName(sizeUp), getUncollapseClassName(uncollapse), getUnstackClassName(unstack));

  return _react2.default.createElement('div', (0, _extends3.default)({}, other, {
    className: rowClassName
  }));
}

exports.default = FlexGridRow;