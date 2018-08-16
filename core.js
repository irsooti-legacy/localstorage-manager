'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _customEvents = require('./customEvents');

var _customEvents2 = _interopRequireDefault(_customEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var core = function core() {
    var tryParseLocalStorage = function tryParseLocalStorage() {
        var localStorageContainer = {};
        Object.keys(localStorage).map(function (key) {
            return localStorageContainer[key] = tryGetValue(key);
        });
        return localStorageContainer;
    };

    var onStorageChange = _customEvents2.default.storageChange({});

    var onStoragePropertyRemove = function onStoragePropertyRemove(prop) {
        return _customEvents2.default.storagePropertyRemove({
            removedProperty: prop
        });
    };

    var onStoragePropertySet = function onStoragePropertySet(prop) {
        return _customEvents2.default.storagePropertySet({
            addedProperty: prop
        });
    };

    var parseError = function parseError(key) {
        return 'The localStorage property "' + key + '" can\'t be converted. Maybe it was stored using legacy localStorage. \n    As fallback, the returned value is the result of localStorage.getItem("' + key + '")';
    };

    var tryGetValue = function tryGetValue(item) {
        var itemFound = localStorage.getItem(item);
        if (itemFound === null) return itemFound;

        var tryParseResult = null;

        try {
            tryParseResult = JSON.parse(itemFound);
        } catch (e) {
            console.warn('[[ Key: ' + item + ' ]]', parseError(item));
            tryParseResult = itemFound;
        }
        return tryParseResult;
    };

    var setValue = function setValue(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        window.dispatchEvent(onStoragePropertySet({ key: key, value: value }));
        window.dispatchEvent(onStorageChange);
    };

    var removeValue = function removeValue(key) {
        var found = tryGetValue(key);
        localStorage.removeItem(key);
        window.dispatchEvent(onStoragePropertyRemove(key));
        window.dispatchEvent(onStorageChange);
    };

    var reset = function reset() {
        localStorage.clear();
        window.dispatchEvent(onStorageChange);
    };

    return {
        /**
         *    It try to parse the whole localStorage
         */
        tryParseLocalStorage: tryParseLocalStorage,
        /**
         *    It try to access to corresponding property like
         *    localStorage.getItem
         */
        tryGetValue: tryGetValue,

        /**
         *    It sets a new json compliant object
         */
        setValue: setValue,

        /**
         *    It removes the matching property value
         */
        removeValue: removeValue,

        /**
         *    It resets localStorage
         */
        reset: reset
    };
};

exports.default = core;