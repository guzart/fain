'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Card2.default.Divider = _Divider2.default;

_Card2.default.Section = _Section2.default;

exports.default = _Card2.default;