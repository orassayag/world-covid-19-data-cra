const textUtils = require('./text.utils');
const validationUtils = require('./validation.utils');

class TimeUtils {

    constructor() { }

    getCurrentDate(value) {
        return value ? validationUtils.isValidArray(value) ? new Date(...value) : new Date(value) : new Date();
    }

    getDateNoSpaces() {
        const date = this.getCurrentDate();
        return [this.getDay(date, false), this.getMonth(date, false), this.getYear(date, false)].join('');
    }

    getDay(date, isUTC) {
        return textUtils.addLeadingZero(isUTC ? date.getUTCDate() : date.getDate());
    }

    getMonth(date, isUTC) {
        return textUtils.addLeadingZero((isUTC ? date.getUTCMonth() : date.getMonth()) + 1);
    }

    getYear(date, isUTC) {
        return isUTC ? date.getUTCFullYear() : date.getFullYear();
    }
}

module.exports = new TimeUtils();