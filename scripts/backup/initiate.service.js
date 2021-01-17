const settings = require('../backup/settings');
const fileUtils = require('../backup/file.utils');
const globalUtils = require('../backup/global.utils');
const pathUtils = require('../backup/path.utils');
const validationUtils = require('../backup/validation.utils');

class InitiateService {

    constructor() { }

    initiate() {
        // First, setup handle errors and promises.
        this.setup();
        // The second important thing to to it to validate all the parameters of the settings.js file.
        this.validateSettings();
        // The next thing is to calculate paths and inject back to the settings.js file.
        this.calculateSettings();
        // Make sure that the dist directory exists. If not, create it.
        this.validateDirectories();
        // Validate that certain directories exists, and if not, create them.
        this.createDirectories();
    }

    setup() {
        // Handle any uncaughtException error.
        process.on('uncaughtException', (error) => {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            console.log(error);
        });
        // Handle any unhandledRejection promise error.
        process.on('unhandledRejection', (reason, promise) => {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            console.log(reason);
            console.log(promise);
        });
    }

    validateSettings() {
        // Validate the settings object existence.
        if (!settings) {
            throw new Error('Invalid or no settings object was found (1000008)');
        }
        this.validatePositiveNumbers();
        this.validateStrings();
        this.validateArrays();
    }

    calculateSettings() {
        const { OUTER_APPLICATION_PATH, INNER_APPLICATION_PATH, APPLICATION_PATH,
            BACKUPS_PATH, NODE_MODULES_PATH, PACKAGE_JSON_PATH, PACKAGE_LOCK_JSON_PATH } = settings;
        settings.APPLICATION_PATH = pathUtils.getJoinPath({ targetPath: OUTER_APPLICATION_PATH, targetName: APPLICATION_PATH });
        settings.BACKUPS_PATH = pathUtils.getJoinPath({ targetPath: OUTER_APPLICATION_PATH, targetName: BACKUPS_PATH });
        settings.NODE_MODULES_PATH = pathUtils.getJoinPath({ targetPath: INNER_APPLICATION_PATH, targetName: NODE_MODULES_PATH });
        settings.PACKAGE_JSON_PATH = pathUtils.getJoinPath({ targetPath: INNER_APPLICATION_PATH, targetName: PACKAGE_JSON_PATH });
        settings.PACKAGE_LOCK_JSON_PATH = pathUtils.getJoinPath({ targetPath: INNER_APPLICATION_PATH, targetName: PACKAGE_LOCK_JSON_PATH });
    }

    validatePositiveNumbers() {
        [
            // ===BACKUP=== //
            'MILLISECONDS_DELAY_VERIFY_BACKUP_COUNT', 'BACKUP_MAXIMUM_DIRECTORY_VERSIONS_COUNT'
        ].map(key => {
            const value = settings[key];
            if (!validationUtils.isPositiveNumber(value)) {
                throw new Error(`Invalid or no ${key} parameter was found: Excpected a number but received: ${value} (1000009)`);
            }
        });
    }

    validateStrings() {
        [
            // ===BACKUP=== //
            'BACKUPS_PATH', 'APPLICATION_NAME', 'BACKUPS_PATH', 'APPLICATION_PATH'
        ].map(key => {
            const value = settings[key];
            if (!validationUtils.isExists(value)) {
                throw new Error(`Invalid or no ${key} parameter was found: Excpected a string but received: ${value} (1000010)`);
            }
        });
    }

    validateArrays() {
        [
            // ===BACKUP=== //
            'IGNORE_DIRECTORIES', 'IGNORE_FILES', 'INCLUDE_FILES'
        ].map(key => {
            const value = settings[key];
            if (!validationUtils.isValidArray(value)) {
                throw new Error(`Invalid or no ${key} parameter was found: Excpected a array but received: ${value} (1000011)`);
            }
        });
    }

    validateDirectories() {
        [
            // ===BACKUP=== //
            'BACKUPS_PATH', 'OUTER_APPLICATION_PATH', 'INNER_APPLICATION_PATH',
            'APPLICATION_PATH', 'PACKAGE_JSON_PATH'
        ].map(key => {
            const value = settings[key];
            // Verify that the paths exists.
            globalUtils.isPathExistsError(value);
            // Verify that the paths accessible.
            globalUtils.isPathAccessible(value);
        });
        [
            // ===BACKUP=== //
            'BACKUPS_PATH', 'OUTER_APPLICATION_PATH', 'INNER_APPLICATION_PATH'
        ].map(key => {
            const value = settings[key];
            // Verify that the paths are of directory and not a file.
            if (!fileUtils.isDirectoryPath(value)) {
                throw new Error(`The parameter path ${key} marked as directory but it's a path of a file: ${value} (1000012)`);
            }
        });
    }

    createDirectories() {
        [
            // ===BACKUP=== //
            'NODE_MODULES_PATH'
        ].map(key => {
            const value = settings[key];
            // Make sure that the dist directory exists, if not, create it.
            globalUtils.createDirectory(value);
        });
    }
}

module.exports = new InitiateService();