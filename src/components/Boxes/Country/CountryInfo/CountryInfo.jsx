import './CountryInfo.scss';
import CountryName from '../CountryName/CountryName';
import CountryPopulation from '../CountryPopulation/CountryPopulation';

const CountryInfo = (props) => {
    const { displayName, upperCode2, titleClassName, populationCountDisplay, populationPercentageDisplay } = props;

    return (
        <div className="info">
            <CountryName
                displayName={displayName}
                upperCode2={upperCode2}
                titleClassName={titleClassName}
            />
            <CountryPopulation
                populationCountDisplay={populationCountDisplay}
                populationPercentageDisplay={populationPercentageDisplay}
            />
        </div>
    );
};

export default CountryInfo;