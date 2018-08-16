import localStorageManager from '../dist/localstorage-manager';
// const localStorageManager = require('../dist/localstorage-manager');
// localStorageManager.default.tryParseLocalStorage

const lastUpdate = Date.now();

let eventsTriggered = 0;

window.addEventListener('localstoragemanager:change', function(evt) {
    eventsTriggered = eventsTriggered + 1;
});

window.addEventListener('localstoragemanager:set', function(evt) {
    eventsTriggered = eventsTriggered + 1;
});

window.addEventListener('localstoragemanager:remove', function(evt) {
    eventsTriggered = eventsTriggered + 1;
});

describe('localStorageManager using Date.now() (' + lastUpdate + ')', () => {
    it('should set a property in localStorage without errors', function() {
        localStorageManager.setValue('prova', lastUpdate);
    });

    it('should retrieve the localStorage object', function() {
        expect(localStorageManager.tryGetValue('prova')).toBeTruthy();
    });

    it('should match with ' + lastUpdate, function() {
        expect(localStorageManager.tryGetValue('prova')).toBe(lastUpdate);
    });

    it('should remove the property from localStorage', function() {
        localStorageManager.removeValue('prova');
        expect(localStorageManager.tryGetValue('prova')).toBe(null);
    });
});

describe('localStorageManager event listeners', () => {
    it('should trigger all events (4 events)', function() {
        expect(eventsTriggered).toBe(4);
    });
});
