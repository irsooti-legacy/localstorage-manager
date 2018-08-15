import localStorageManager from '../dist/localstorage-manager';
console.log(localStorageManager)
const lastUpdate = Date.now();

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
