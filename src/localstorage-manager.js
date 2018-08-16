import core from './core';

module.exports = {
    /**
     *    It resets localStorage
     */
    reset: core.reset,
    /**
     *    It sets a new json compliant object
     */
    setValue: core.setValue,
    /**
     *    It try to access to corresponding property like
     *    localStorage.getItem
     */
    tryGetValue: core.tryGetValue,
    /**
     *    It try to parse the whole localStorage
     */
    tryParseLocalStorage: core.tryParseLocalStorage,
    /**
     *    It removes the matching property value
     */
    removeValue: core.removeValue
};
