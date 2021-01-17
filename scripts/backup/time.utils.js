const textUtils = require('./text.utils');

class TimeUtils {

    constructor() { }

    getDateNoSpaces() {
        const date = new Date();
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