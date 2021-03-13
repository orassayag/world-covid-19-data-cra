const settings = require('../../settings/settings');
const { fileUtils, globalUtils, pathUtils, validationUtils } = require('../../utils');

class InitiateService {

    constructor() { }

    initiate() {
        // First, setup handles errors and promises.
        this.setup();
        // The second important thing to do is to validate all the parameters of the settings.js file.
        this.validateSettings();
        // The next thing is to calculate paths and inject back to the settings.js file.
        this.calculateSettings();
        // Make sure that the dist directory exists. If not, create it.
        this.validateDirectories();
        // Validate that certain directories exist, and if not, create them.
        this.createDirectories();
    }

    setup() {
        // Handle any uncaughtException error.
        process.on('uncaughtException', (error) => {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            console.log(error);
            process.exit(0);
        });
        // Handle any unhandledRejection promise error.
        process.on('unhandledRejection', (reason, promise) => {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            console.log(reason);
            console.log(promise);
            process.exit(0);
        });
    }

    validateSettings() {
        // Validate the settings object existence.
        if (!settings) {
            throw new Error('Invalid or no settings object was found (1000002)');
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
                throw new Error(`Invalid or no ${key} parameter was found: Expected a number but received: ${value} (1000003)`);
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
                throw new Error(`Invalid or no ${key} parameter was found: Expected a string but received: ${value} (1000004)`);
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
                throw new Error(`Invalid or no ${key} parameter was found: Expected an array but received: ${value} (1000005)`);
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
            // Verify that the path exists.
            globalUtils.isPathExistsError(value);
            // Verify that the paths are accessible.
            globalUtils.isPathAccessible(value);
        });
        [
            // ===BACKUP=== //
            'BACKUPS_PATH', 'OUTER_APPLICATION_PATH', 'INNER_APPLICATION_PATH'
        ].map(key => {
            const value = settings[key];
            // Verify that the paths are of directory and not a file.
            if (!fileUtils.isDirectoryPath(value)) {
                throw new Error(`The parameter path ${key} marked as directory but it's a path of a file: ${value} (1000006)`);
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