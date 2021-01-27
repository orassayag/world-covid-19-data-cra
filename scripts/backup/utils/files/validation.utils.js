class ValidationUtils {

    constructor() { }

    isExists(list) {
        return list && list.length > 0;
    }

    isValidArray(variable) {
        return Object.prototype.toString.call(variable) === '[object Array]';
    }

    // This method checks if a given value is a valid number and return the result.
    isValidNumber(number) {
        number = Number(number);
        return !isNaN(number) && typeof number == 'number';
    }

    isPositiveNumber(number) {
        if (!this.isValidNumber(number)) {
            return false;
        }
        return Number(number) > 0;
    }
}

module.exports = new ValidationUtils();