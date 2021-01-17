import { SettingsType } from '../../types';

class SettingsActions {

    constructor() { }

    setStateSettingsList(listName, listValues) {
        return {
            type: SettingsType.SETTINGS_SET_STATE_SETTINGS_LIST,
            listName: listName,
            listValues: listValues
        };
    }
}

export default new SettingsActions();