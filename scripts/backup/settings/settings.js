const { pathUtils } = require('../utils');

const settings = {
    // ===BACKUP=== //
    // Determine the path for the outer application, where other directories located, such as backups, sources, etc...
    // (Working example: 'C:\\Or\\Web\\world-covid-19-data\\').
    OUTER_APPLICATION_PATH: pathUtils.getJoinPath({
        targetPath: __dirname,
        targetName: '../../../../'
    }),
    // Determine the inner application path where all the source of the application is located.
    // (Working example: 'C:\\Or\\Web\\world-covid-19-data\\world-covid-19-data\\').
    INNER_APPLICATION_PATH: pathUtils.getJoinPath({
        targetPath: __dirname,
        targetName: '../../../'
    }),
    // Determine the directory path of the node_modules.
    // (Working example: 'C:\\Or\\Web\\world-covid-19-data\\world-covid-19-data\\node_modules').
    NODE_MODULES_PATH: 'node_modules',
    // Determine the directory of the package.json.
    // (Working example: 'C:\\Or\\Web\\world-covid-19-data\\world-covid-19-data\\package.json').
    PACKAGE_JSON_PATH: 'package.json',
    // Determine the path of the package-lock.json.
    // (Working example: 'C:\\Or\\Web\\world-covid-19-data\\world-covid-19-data\\package-lock.json').
    PACKAGE_LOCK_JSON_PATH: 'package-lock.json',
    APPLICATION_NAME: 'world-covid-19-data', // Determine the application name used for some of the calculated paths.
    BACKUPS_PATH: 'backups', // Determine the backups directory which all the local backup will be created to.
    APPLICATION_PATH: 'world-covid-19-data', // All the these paths will be calculated during runtime in the initiate service.
    MILLISECONDS_DELAY_VERIFY_BACKUP_COUNT: 1000, // Determine the period of time in milliseconds to check that files were created / moved to the target path.
    BACKUP_MAXIMUM_DIRECTORY_VERSIONS_COUNT: 50, // Determine the number of time in loop to check for version of a backup.
    IGNORE_DIRECTORIES: ['node_modules', 'assert'], // Determine the directories to ignore when an backup copy is taking place.
    IGNORE_FILES: [''], // Determine the files to ignore when the back copy is taking place.
    INCLUDE_FILES: ['.gitignore']  // Determine the files to force include when the back copy is taking place.
};

module.exports = settings;