# Localstorage manager

The library is pretty simple, because is pretty similar to legacy localstorage api.

- `tryGetValue(property)`: provided function is used to get the object accessing to corresponding property (like localStorage.getItem());

- `setValue(propertyName, object)`: set a property name and put your object. That's it. 

- `removeValue(property)`: It works like localStorage.removeItem
- `reset()`: It works like localStorage.clear
- `setDebuggingStatus(bool)`: Each time you update the localStorage, a table with updated data appears in console log
