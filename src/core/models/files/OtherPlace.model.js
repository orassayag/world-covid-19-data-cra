class OtherPlaceModel {

    constructor(data) {
        const { id, lowerName, displayName, wikipediaURL, populationCountDisplay } = data;
        this.id = id;
        this.lowerName = lowerName;
        this.displayName = displayName;
        this.wikipediaURL = wikipediaURL;
        this.populationCountDisplay = populationCountDisplay;
    }
}

export default OtherPlaceModel;