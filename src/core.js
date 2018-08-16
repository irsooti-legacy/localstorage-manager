import customEvents from './customEvents';

const core = () => {
    let tryParseLocalStorage = () => {
        let localStorageContainer = {};
        Object.keys(localStorage).map(
            key => (localStorageContainer[key] = tryGetValue(key))
        );
        return localStorageContainer;
    };

    let onStorageChange = customEvents.storageChange({});

    let onStoragePropertyRemove = prop =>
        customEvents.storagePropertyRemove({
            removedProperty: prop
        });

    let onStoragePropertySet = prop =>
        customEvents.storagePropertySet({
            addedProperty: prop
        });

    const parseError = key => `The localStorage property "${key}" can\'t be converted. Maybe it was stored using legacy localStorage. 
    As fallback, the returned value is the result of localStorage.getItem("${key}")`;

    let tryGetValue = item => {
        var itemFound = localStorage.getItem(item);
        if (itemFound === null) return itemFound;

        let tryParseResult = null;

        try {
            tryParseResult = JSON.parse(itemFound);
        } catch (e) {
            console.warn(`[[ Key: ${item} ]]`, parseError(item));
            tryParseResult = itemFound;
        }
        return tryParseResult;
    };

    let setValue = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        window.dispatchEvent(onStoragePropertySet({ key, value }));
        window.dispatchEvent(onStorageChange);
    };

    let removeValue = key => {
        let found = tryGetValue(key);
        localStorage.removeItem(key);
        window.dispatchEvent(onStoragePropertyRemove(key));
        window.dispatchEvent(onStorageChange);
    };

    let reset = () => {
        localStorage.clear();
        window.dispatchEvent(onStorageChange);
    };

    return {
        /**
         *    It try to parse the whole localStorage
         */
        tryParseLocalStorage,
        /**
         *    It try to access to corresponding property like
         *    localStorage.getItem
         */
        tryGetValue,

        /**
         *    It sets a new json compliant object
         */
        setValue,

        /**
         *    It removes the matching property value
         */
        removeValue,

        /**
         *    It resets localStorage
         */
        reset
    };
};

export default core;
