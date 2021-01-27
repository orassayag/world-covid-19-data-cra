class TextUtils {

    constructor() { }

    addLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    addBackslash(text) {
        if (!text) {
            return '';
        }
        return `${text}/`;
    }

    getBackupName(data) {
        const { applicationName, date, title, index } = data;
        return `${applicationName}_${date}-${(index + 1)}${title ? `-${title}` : ''}`;
    }

    removeAllCharacters(text, target) {
        if (!text) {
            return '';
        }
        return text.split(target).join('');
    }

    toLowerCase(text) {
        if (!text) {
            return '';
        }
        return text.toLowerCase();
    }
}

module.exports = new TextUtils();