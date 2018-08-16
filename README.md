# Localstorage manager  [![CircleCI](https://circleci.com/gh/irsooti/localstorage-manager/tree/master.svg?style=svg)](https://circleci.com/gh/irsooti/localstorage-manager/tree/master)

The library is pretty simple, because is pretty similar to legacy localstorage api.

- `tryGetValue(property)`: provided function is used to get the object accessing to corresponding property (like localStorage.getItem());

- `setValue(propertyName, object)`: set a property name and put your object. That's it. 

- `removeValue(property)`: It works like localStorage.removeItem
- `reset()`: It works like localStorage.clear
- `tryParseLocalStorage()`: It try to parse the whole localStorage

## Events handler

- `localstoragemanager:change`: The event is fired when a change occurs by localStorageManager, it returns an empty detail for now;
- `localstoragemanager:remove`: The event is fired when a property is removed by localStorageManager and it returns a detail wich contains the key removed
- `localstoragemanager:set`: The event is fired when a property is setted by localStorageManager and it returns a detail wich contains the key and the value added