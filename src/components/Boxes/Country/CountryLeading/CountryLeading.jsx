import './CountryLeading.scss';
import CountryLeadingBox from '../CountryLeadingBox/CountryLeadingBox';
import CountryLocation from '../CountryLocation/CountryLocation';

const CountryLeading = (props) => {
    const { leadingClassName, innerLeadingClassName, leadingValueDisplay, leadingIconName, locationClassName, googleMapsURL } = props;

    return (
        <div className="leading">
            <CountryLocation
                locationClassName={locationClassName}
                googleMapsURL={googleMapsURL}
            />
            <CountryLeadingBox
                leadingClassName={leadingClassName}
                innerLeadingClassName={innerLeadingClassName}
                leadingValueDisplay={leadingValueDisplay}
                leadingIconName={leadingIconName}
            />
        </div>
    );
};

export default CountryLeading;