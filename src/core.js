const core = () => {
    let isDebugging = false;
    const parseError = `Item found can\'t be converted. Maybe it was stored using legacy localStorage. 
    Anyway, as fallback, I returned the result of localStorage.getItem`;

    let setDebuggingStatus = bool => (isDebugging = bool === true);
    let showDebuggingTable = () => {
        if (isDebugging) {
            console.table(localStorage);
        }
    };

    let tryGetValue = item => {
        var itemFound = localStorage.getItem(item);
        if (itemFound === null) return itemFound;

        let tryParseResult = null;

        try {
            tryParseResult = JSON.parse(itemFound);
        } catch (e) {
            console.warn(parseError);
            tryParseResult = itemFound;
        }
        return tryParseResult;
    };

    let setValue = function(key, item) {
        localStorage.setItem(key, JSON.stringify(item));
        showDebuggingTable();
    };

    let removeValue = key => {
        localStorage.removeItem(key);
        showDebuggingTable();
    };

    let reset = () => {
        localStorage.clear();
        showDebuggingTable();
    };

    return {
        /**
         *    console.table() your current localStorage
         *    Set true or false to enable/disable
         */
        setDebuggingStatus,
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
