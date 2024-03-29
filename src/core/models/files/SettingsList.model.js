class SettingsListModel {

    constructor(data) {
        const { isActive, isLiveMode, viewType, colorType, sortType } = data;
        this.isActive = isActive;
        this.isLiveMode = isLiveMode;
        this.isRecoverMode = null;
        this.isRefreshMode = null;
        this.leadingSource = null;
        this.viewType = viewType;
        this.colorType = colorType;
        this.sortType = sortType;
        this.forceSortDirection = null;
        this.isDisplayError = null;
        this.isDisplayModal = null;
        this.activeModalName = null;
        this.activeModalValue = null;
        this.isReplaceModalMode = null;
        this.isActionLoader = null;
        // Set default values.
        this.setDefaultValues();
    }

    setDefaultValues() {
        this.isRecoverMode = false;
        this.isRefreshMode = false;
        this.isReplaceModalMode = false;
        this.isActionLoader = false;
        this.isDisplayError = false;
        this.isDisplayModal = false;
    }
}

export default SettingsListModel;