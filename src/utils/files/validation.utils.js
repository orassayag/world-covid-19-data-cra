class ValidationUtils {

    constructor() { }

    isExists(list) {
        return list && list.length > 0;
    }
}

export default new ValidationUtils();
