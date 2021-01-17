class CoreUtils {

    constructor() { }

    sleep(millisecondsCount) {
        if (!millisecondsCount) {
            return;
        }
        return new Promise(resolve => setTimeout(resolve, millisecondsCount)).catch(e => console.log(e));
    }

    updateObject(oldObject, updatedProperties) {
        return {
            ...oldObject,
            ...updatedProperties
        };
    }

    getValue(e) {
        return e.target.value || e.currentTarget.value;
    }

    getAttributeName(e, attributeName) {
        return e.target.getAttribute(attributeName) || e.currentTarget.getAttribute(attributeName);
    }
}

export default new CoreUtils();