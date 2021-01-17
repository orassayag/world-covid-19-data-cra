import { DataType } from '../../types';

class DataActions {

    constructor() { }

    setStateDataCollection(collectionName, collectionValue) {
        return {
            type: DataType.DATA_SET_STATE_DATA_COLLECTION,
            collectionName: collectionName,
            collectionValue: collectionValue
        };
    }
}

export default new DataActions();