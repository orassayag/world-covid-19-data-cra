import './CountryLocation.scss';
import CountryLocationEmpty from '../CountryLocationEmpty/CountryLocationEmpty';
import CountryLocationExists from '../CountryLocationExists/CountryLocationExists';
import CountryLocationUnknown from '../CountryLocationUnknown/CountryLocationUnknown';

const CountryLocation = (props) => {
    const { locationClassName, googleMapsURL } = props;
    let locationDOM = null;
    if (locationClassName && googleMapsURL) {
        locationDOM = (<CountryLocationExists
            locationClassName={locationClassName}
        />);
    }
    else if (!locationClassName && googleMapsURL) {
        locationDOM = (<CountryLocationUnknown />);
    }
    else {
        locationDOM = (<CountryLocationEmpty />);
    }

    return (
        <div className="location-container">
            {locationDOM}
        </div>
    );
};

export default CountryLocation;