import { useSelector } from 'react-redux';
import './ModalContainer.scss';
import CountriesModal from '../../Countries/CountriesModal/CountriesModal';
import CountryModel from '../../Country/CountryModal/CountryModal';
import CreditsModal from '../../Credits/CreditsModal/CreditsModal';
import SourcesModal from '../../Sources/SourcesModal/SourcesModal';
import StatisticsModal from '../../Statistics/StatisticsModal/StatisticsModal';
import { engineService } from '../../../../services';

const ModalContainer = (props) => {
    const { onActionClick, onActionChange } = props;
    // State variables.
    const settingsList = useSelector((state) => state.settings.settingsList);
    const statisticsUpdatesList = useSelector((state) => state.statisticsUpdates.statisticsUpdatesList);
    const statisticsUpdatesSettingsList = useSelector((state) => state.statisticsUpdates.statisticsUpdatesSettingsList);
    const countriesList = useSelector((state) => state.data.countriesList);
    const countriesNameIdList = useSelector((state) => state.data.countriesNameIdList);
    const sourcesList = useSelector((state) => state.data.sourcesList);
    const { activeModalName, activeModalValue } = settingsList;
    const { statisticsUpdatesHoursCount, statisticsUpdatesCountryId } = statisticsUpdatesSettingsList;
    if (!activeModalName) {
        return null;
    }

    return (
        <div className="modal">
            {(() => {
                switch (activeModalName) {
                    case 'countries': {
                        return (<CountriesModal
                            onActionClick={onActionClick}
                        />);
                    }
                    case 'country': {
                        const countryData = engineService.getCountryData({
                            id: activeModalValue,
                            countriesList: countriesList,
                            statisticsUpdatesList: statisticsUpdatesList
                        });
                        return (<CountryModel
                            country={countryData.country}
                            updatesList={countryData.updatesList}
                            sourcesList={sourcesList}
                            onActionClick={onActionClick}
                        />);
                    }
                    case 'credits': {
                        return (<CreditsModal
                            onActionClick={onActionClick}
                        />);
                    }
                    case 'sources': {
                        return (<SourcesModal
                            onActionClick={onActionClick}
                        />);
                    }
                    case 'statistics': {
                        return (<StatisticsModal
                            countriesNameIdList={countriesNameIdList}
                            statisticsUpdatesList={statisticsUpdatesList}
                            statisticsUpdatesHoursCount={statisticsUpdatesHoursCount}
                            statisticsUpdatesCountryId={statisticsUpdatesCountryId}
                            onActionClick={onActionClick}
                            onActionChange={onActionChange}
                        />);
                    }
                }
            })()}
        </div>
    );
};

export default ModalContainer;