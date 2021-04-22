require('./backup/services/files/initiate.service').initiate();
const settings = require('./backup/settings/settings');
const { fileUtils, globalUtils, logUtils, pathUtils, textUtils, timeUtils } = require('./backup/utils');
const { BackupData } = require('./backup/models');

class BackupScript {

    constructor() {
        this.backupData = null;
        this.backupTitle = null;
    }

    initiate() {
        // Get the backup title from the console.
        this.backupTitle = textUtils.removeAllCharacters(textUtils.toLowerCase(process.argv[2]), '.');
        this.backupData = new BackupData(settings);
        logUtils.log('INITIATE THE BASE PARAMETERS');
    }

    async run() {
        // Initiate the base parameters.
        this.initiate();
        // Create the backup directory.
        await this.create();
    }

    async create() {
        logUtils.log('START BACKUP');
        // Set the parameters to all names and directories for the backup.
        await this.setParameters();
        // Create the backup.
        await this.runBackup();
    }

    async setParameters() {
        logUtils.log('SET THE PARAMETERS');
        let backupTemporaryPath = null;
        for (let i = 0; i < this.backupData.backupMaximumDirectoryVersionsCount; i++) {
            const backupName = textUtils.getBackupName({
                applicationName: this.backupData.applicationName,
                date: timeUtils.getDateNoSpaces(),
                title: this.backupTitle,
                index: i
            });
            backupTemporaryPath = pathUtils.getJoinPath({
                targetPath: this.backupData.backupsPath,
                targetName: textUtils.addBackslash(backupName)
            });
            if (!await fileUtils.isPathExists(backupTemporaryPath)) {
                this.backupData.targetBackupName = backupName;
                this.backupData.targetFullPath = backupTemporaryPath;
                break;
            }
        }
    }

    async runBackup() {
        logUtils.log('RUN BACKUP');
        // Validate the backup name.
        if (!this.backupData.targetBackupName) {
            throw new Error('No backup name was provided (1000000)');
        }
        // Reset the backup directory.
        await fileUtils.removeDirectoryIfExists(this.backupData.targetFullPath);
        await fileUtils.createDirectoryIfNotExists(this.backupData.targetFullPath);
        await fileUtils.copyDirectory(this.backupData.sourceFullPath, this.backupData.targetFullPath, this.filterDirectories.bind(this));
        // Verify the backup directory existence.
        await this.verifyBackup();
    }

    filterDirectories(source) {
        let isIncluded = true;
        let { ignoreDirectories, ignoreFiles, includeFiles } = this.backupData.backupDirectory;
        for (let i = 0, length = ignoreDirectories.length; i < length; i++) {
            const currentPath = ignoreDirectories[i];
            isIncluded = !(source.indexOf(currentPath) > -1);
            const fileName = pathUtils.getBasename(source);
            if (includeFiles.includes(fileName)) {
                isIncluded = true;
            }
            if (ignoreFiles.includes(fileName)) {
                isIncluded = false;
            }
            if (!isIncluded) {
                break;
            }
        }
        return isIncluded;
    }

    async verifyBackup() {
        await globalUtils.sleep(this.backupData.millisecondsDelayVerifyBackupCount);
        if (!await fileUtils.isPathExists(this.backupData.targetFullPath)) {
            throw new Error('No backup was provided (1000001)');
        }
        logUtils.log(`FINISH TO CREATE A BACKUP: ${this.backupData.targetBackupName}`);
    }
}

(async () => {
    await new BackupScript().run();
})().catch(e => {
    console.log(e);
    process.exit(1);
});