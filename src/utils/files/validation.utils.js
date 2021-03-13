class ValidationUtils {

    constructor() { }

    isExists(list) {
        return list && list.length > 0;
    }
}

module.exports = new ValidationUtils();