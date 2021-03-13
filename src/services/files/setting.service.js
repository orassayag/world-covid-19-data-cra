import settings from '../../settings/settings';
import { LoadingListModel, SettingsListModel } from '../../core/models';
import { ColorType, CountrySortType, ComponentMode, ViewType } from '../../core/enums';
import quoteService from './quote.service';
import sortService from './sort.service';

class SettingService {

    constructor() {
        if (!this.isAppComponent()) {
            return;
        }
        this.loadingList = new LoadingListModel(quoteService.getRandomQuote());
        this.settingsList = new SettingsListModel({
            isActive: true,
            isLiveMode: true,
            viewType: ViewType.HORIZONTAL,
            colorType: ColorType.NIGHT,
            sortType: sortService.sortsList[CountrySortType.CASE]
        });
    }

    initiateStateSettingsList() {
        if (!this.isAppComponent()) {
            return;
        }
        const { isDisplayError, isDisplayModal, activeModalName, activeModalValue, isReplaceModalMode, isActionLoader } = this.settingsList;
        return {
            isDisplayError: isDisplayError,
            isDisplayModal: isDisplayModal,
            activeModalName: activeModalName,
            activeModalValue: activeModalValue,
            isReplaceModalMode: isReplaceModalMode,
            isActionLoader: isActionLoader
        };
    }

    initiateStateLoadingList() {
        if (!this.isAppComponent()) {
            return;
        }
        return this.loadingList;
    }

    initiateSettingsList() {
        if (!this.isAppComponent()) {
            return;
        }
        // ToDo: Active when implementing query parameters.
        // ToDo: Here check query parameters for the settings.
        // Settings.
        return this.settingsList;
    }

    isAppComponent() {
        return settings.COMPONENT_MODE === ComponentMode.APP;
    }
}

export default new SettingService();