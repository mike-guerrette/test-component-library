'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _uiCore = require('@robinpowered/ui-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_uiCore.Colors.UI.Background.Blue);

var Card = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1r1p2t30'
})({
  border: '1px solid gray',
  padding: _uiCore.Spacing.Small,
  color: 'blue',
  backgroundColor: _uiCore.Colors.UI.Background.White
});

exports.default = Card;