'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var customEvents = function () {
    var storageChange = function storageChange(obj) {
        return new CustomEvent('localstoragemanager:change', {
            detail: Object.assign({}, obj)
        });
    };

    var storagePropertyRemove = function storagePropertyRemove(obj) {
        return new CustomEvent('localstoragemanager:remove', {
            detail: Object.assign({}, obj)
        });
    };

    var storagePropertySet = function storagePropertySet(obj) {
        return new CustomEvent('localstoragemanager:set', {
            detail: Object.assign({}, obj)
        });
    };

    return {
        storageChange: storageChange,
        storagePropertyRemove: storagePropertyRemove,
        storagePropertySet: storagePropertySet
    };
}();

exports.default = customEvents;