'use strict';

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /**
   *    It resets localStorage
   */
  reset: _core2.default.reset,
  /**
   *    It sets a new json compliant object
   */
  setValue: _core2.default.setValue,
  /**
   *    It try to access to corresponding property like
   *    localStorage.getItem
   */
  tryGetValue: _core2.default.tryGetValue,
  /**
   *    It try to parse the whole localStorage
   */
  tryParseLocalStorage: _core2.default.tryParseLocalStorage,
  /**
   *    It removes the matching property value
   */
  removeValue: _core2.default.removeValue
};