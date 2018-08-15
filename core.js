"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var core = function core() {
    var isDebugging = false;
    var parseError = "Item found can't be converted. Maybe it was stored using legacy localStorage. \n    Anyway, as fallback, I returned the result of localStorage.getItem";

    var setDebuggingStatus = function setDebuggingStatus(bool) {
        return isDebugging = bool === true;
    };
    var showDebuggingTable = function showDebuggingTable() {
        if (isDebugging) {
            console.table(localStorage);
        }
    };

    var tryGetValue = function tryGetValue(item) {
        var itemFound = localStorage.getItem(item);
        if (itemFound === null) return itemFound;

        var tryParseResult = null;

        try {
            tryParseResult = JSON.parse(itemFound);
        } catch (e) {
            console.warn(parseError);
            tryParseResult = itemFound;
        }
        return tryParseResult;
    };

    var setValue = function setValue(key, item) {
        localStorage.setItem(key, JSON.stringify(item));
        showDebuggingTable();
    };

    var removeValue = function removeValue(key) {
        localStorage.removeItem(key);
        showDebuggingTable();
    };

    var reset = function reset() {
        localStorage.clear();
        showDebuggingTable();
    };

    return {
        /**
         *    console.table() your current localStorage
         *    Set true or false to enable/disable
         */
        setDebuggingStatus: setDebuggingStatus,
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