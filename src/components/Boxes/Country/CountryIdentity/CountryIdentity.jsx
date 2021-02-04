import './CountryIdentity.scss';
import CountryImage from '../CountryImage/CountryImage';
import CountryInfo from '../CountryInfo/CountryInfo';
import CountryRemove from '../CountryRemove/CountryRemove';

const CountryIdentity = (props) => {
    const { displayName, upperCode2, titleClassName, flagClassName, populationCountDisplay, populationPercentageDisplay } = props;

    return (
        <div className="identity">
            <CountryImage
                flagClassName={flagClassName}
            />
            <CountryInfo
                displayName={displayName}
                upperCode2={upperCode2}
                titleClassName={titleClassName}
                populationCountDisplay={populationCountDisplay}
                populationPercentageDisplay={populationPercentageDisplay}
            />
            <CountryRemove />
        </div>
    );
};

export default CountryIdentity;