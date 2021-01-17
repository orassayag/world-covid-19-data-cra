class QuoteModel {

    constructor(data) {
        const { quote, quoteName, quoteNameURL, categoryName, categoryIconName, categoryIconType } = data;
        this.quote = quote;
        this.quoteName = quoteName;
        this.quoteNameURL = quoteNameURL;
        this.categoryName = categoryName;
        this.categoryIconName = categoryIconName;
        this.categoryIconType = categoryIconType;
    }
}

export default QuoteModel;