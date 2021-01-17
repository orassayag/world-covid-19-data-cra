class LoadingListModel {

    constructor(quote) {
        this.loadingPrecentage = null;
        this.loadingSourceName = null;
        this.loadingQuote = quote;
        this.refreshSourceName = null;
        this.isScreenLoaderComplete = false;
        // Set default values.
        this.setDefaultValues();
    }

    setDefaultValues() {
        this.loadingPrecentage = 0;
        this.loadingSourceName = '';
    }
}

export default LoadingListModel;