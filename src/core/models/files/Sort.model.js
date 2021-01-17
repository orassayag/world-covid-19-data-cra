class SortModel {

    constructor(data) {
        const { sortTypeName, fieldsList, direction, directionSymbol } = data;
        this.sortTypeName = sortTypeName;
        this.fieldsList = fieldsList;
        this.direction = direction;
        this.directionSymbol = directionSymbol;
    }
}

export default SortModel;