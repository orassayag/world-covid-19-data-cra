require('./backup/services/files/initiate.service').initiate();
const settings = require('./backup/settings/settings');
const { BackupDataModel } = require('./backup/models');
const { fileUtils, globalUtils, logUtils, pathUtils, textUtils, timeUtils } = require('./backup/utils');

class BackupScript {

    constructor() {
        this.backupDataModel = null;
        this.backupTitle = null;
    }

    initiate() {
        // Get the backup title from the console.
        this.backupTitle = textUtils.removeAllCharacters(textUtils.toLowerCase(process.argv[2]), '.');
        this.backupDataModel = new BackupDataModel(settings);
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
        for (let i = 0; i < this.backupDataModel.backupMaximumDirectoryVersionsCount; i++) {
            const backupName = textUtils.getBackupName({
                applicationName: this.backupDataModel.applicationName,
                date: timeUtils.getDateNoSpaces(),
                title: this.backupTitle,
                index: i
            });
            backupTemporaryPath = pathUtils.getJoinPath({
                targetPath: this.backupDataModel.backupsPath,
                targetName: textUtils.addBackslash(backupName)
            });
            if (!await fileUtils.isPathExists(backupTemporaryPath)) {
                this.backupDataModel.targetBackupName = backupName;
                this.backupDataModel.targetFullPath = backupTemporaryPath;
                break;
            }
        }
    }

    async runBackup() {
        logUtils.log('RUN BACKUP');
        // Validate the backup name.
        if (!this.backupDataModel.targetBackupName) {
            throw new Error('No backup name was provided (1000000)');
        }
        // Reset the backup directory.
        await fileUtils.removeDirectoryIfExists(this.backupDataModel.targetFullPath);
        await fileUtils.createDirectoryIfNotExists(this.backupDataModel.targetFullPath);
        await fileUtils.copyDirectory(this.backupDataModel.sourceFullPath, this.backupDataModel.targetFullPath, this.filterDirectories.bind(this));
        // Verify the backup directory existence.
        await this.verifyBackup();
    }

    filterDirectories(source) {
        let isIncluded = true;
        let { ignoreDirectories, ignoreFiles, includeFiles } = this.backupDataModel.backupDirectoryModel;
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
        await globalUtils.sleep(this.backupDataModel.millisecondsDelayVerifyBackupCount);
        if (!await fileUtils.isPathExists(this.backupDataModel.targetFullPath)) {
            throw new Error('No backup was provided (1000001)');
        }
        logUtils.log(`FINISH TO CREATE A BACKUP: ${this.backupDataModel.targetBackupName}`);
    }
}

(async () => {
    await new BackupScript().run();
})().catch(e => {
    console.log(e);
    process.exit(1);
});