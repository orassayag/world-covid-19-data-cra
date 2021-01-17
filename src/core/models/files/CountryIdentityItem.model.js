class CountryIdentityItemModel {

    constructor(data) {
        const { iconName, iconTooltip, value } = data;
        this.itemClassName = null;
        this.iconName = iconName;
        this.iconTooltip = iconTooltip;
        this.iconType = null;
        this.value = value;
        this.isLastItem = null;
        this.isIconOnly = null;
        this.isURL = null;
        this.urlText = null;
        // Set default values.
        this.setDefaultValues();
    }

    setDefaultValues() {
        this.itemClassName = '';
        this.isLastItem = false;
        this.isIconOnly = false;
        this.isURL = false;
    }
}

export default CountryIdentityItemModel;