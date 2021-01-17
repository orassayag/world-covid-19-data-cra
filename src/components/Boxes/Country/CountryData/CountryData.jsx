import React from 'react';
import './CountryData.scss';
import CountrySource from '../CountrySource/CountrySource';

const CountryData = (props) => {
    const { sourcesData, sourcesList, updateSourceName } = props;
    const sources = [];
    for (let i = 0; i < sourcesList.length; i++) {
        const source = sourcesList[i];
        if (!source.isCovidData) {
            continue;
        }
        sources.push(
            (<CountrySource
                key={i}
                source={source}
                data={sourcesData[source.lowerName]}
                updateSourceName={updateSourceName}
            />)
        );
    }

    return (
        <div className="data">
            <div className="sources">
                {sources}
            </div>
        </div>
    );
};

export default CountryData;