const core = () => {
  let isDebugging = false;

  let setDebuggingStatus = bool => (isDebugging = bool === true);
  let showDebuggingTable = () => {
    if (isDebugging) {
      console.table(localStorage);
    }
  };

  let tryGetValue = item => {
    var itemFound = localStorage.getItem(item);
    if (itemFound === null) return itemFound;

    showDebuggingTable();
    return JSON.parse(itemFound);
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
