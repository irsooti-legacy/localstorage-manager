const customEvents = (() => {
    let storageChange = obj =>
        new CustomEvent('localstoragemanager:change', {
            detail: Object.assign({}, obj)
        });

    let storagePropertyRemove = obj =>
        new CustomEvent('localstoragemanager:remove', {
            detail: Object.assign({}, obj)
        });

    let storagePropertySet = obj =>
        new CustomEvent('localstoragemanager:set', {
            detail: Object.assign({}, obj)
        });

    return {
        storageChange,
        storagePropertyRemove,
        storagePropertySet
    };
})();

export default customEvents;
