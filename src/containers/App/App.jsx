import { useRef, useEffect, useCallback, createRef } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import './App.scss';
import { CountryBox, Error, MasterBox, ModalContainer, ScreenLoader } from '../../components';
import { dataActions, settingsActions, statisticsActions, statisticsUpdatesActions } from '../../store/actions/actions';
import { engineService } from '../../services';
import { coreUtils, validationUtils } from '../../utils';

const App = (props) => {
  const dispatch = useDispatch();
  // Refs.
  const elRefs = useRef([]);
  // State variables.
  const settingsList = useSelector((state) => state.settings.settingsList);
  const loadingList = useSelector((state) => state.settings.loadingList);
  const sourcesList = useSelector((state) => state.data.sourcesList);
  const countriesList = useSelector((state) => state.data.countriesList);
  const { isActive, isRefreshMode, viewType, isDisplayError, activeModalName,
    activeModalValue, isReplaceModalMode, isActionLoader } = settingsList;
  const { loadingPercentage, isScreenLoaderComplete } = loadingList;
  // Functions to update the state.
  const onSetStateCurrentTime = (data) => dispatch(statisticsActions.setStateCurrentTime(data));
  const onSetStateSettingsList = (listName, listValues) => dispatch(settingsActions.setStateSettingsList(listName, listValues));
  const onSetStateStatisticsField = (fieldName, fieldValue) => dispatch(statisticsActions.setStateStatisticsField(fieldName, fieldValue));
  const onSetStateStatisticsList = (statisticsList) => dispatch(statisticsActions.setStateStatisticsList(statisticsList));
  const onSetStateStatisticsUpdatesSettingsList = (statisticsUpdatesSettingsList) => dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesSettingsList(statisticsUpdatesSettingsList));
  const onSetStateDataCollection = (collectionName, collectionValue) => dispatch(dataActions.setStateDataCollection(collectionName, collectionValue));
  const onSetStateInitiateSettings = (data) => {
    const { settingsList, loadingList } = data;
    batch(() => {
      dispatch(settingsActions.setStateSettingsList('settingsList', settingsList));
      dispatch(settingsActions.setStateSettingsList('loadingList', loadingList));
    });
  };
  const onSetStateInitiateSources = (data) => {
    const { sourcesList, countriesList, countriesNameIdList, statisticsList, settingsList } = data;
    batch(() => {
      dispatch(dataActions.setStateDataCollection('sourcesList', sourcesList));
      dispatch(dataActions.setStateDataCollection('countriesList', countriesList));
      dispatch(dataActions.setStateDataCollection('countriesNameIdList', countriesNameIdList));
      dispatch(settingsActions.setStateSettingsList('settingsList', settingsList));
      dispatch(statisticsActions.setStateStatisticsList(statisticsList));
    });
  };
  const onSetStateUpdateRound = (data) => {
    const { countriesList, statisticsList, updateStatisticsUpdatesListResults } = data;
    const { statisticsUpdatesList, statisticsUpdatesSettingsList } = updateStatisticsUpdatesListResults;
    batch(() => {
      dispatch(dataActions.setStateDataCollection('countriesList', countriesList));
      dispatch(statisticsActions.setStateStatisticsList(statisticsList));
      if (validationUtils.isExists(statisticsUpdatesList)) {
        dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesList(statisticsUpdatesList));
        dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesSettingsList(statisticsUpdatesSettingsList));
      }
    });
  };
  const onSetStateActionUpdate = (data) => {
    const { countriesList, settingsList } = data;
    batch(() => {
      dispatch(dataActions.setStateDataCollection('countriesList', countriesList));
      dispatch(settingsActions.setStateSettingsList('settingsList', settingsList));
    });
  };
  const onSetStateActionRefresh = (data) => {
    const { countriesList, settingsList, statisticsList, updateStatisticsUpdatesListResults } = data;
    const { statisticsUpdatesList, statisticsUpdatesSettingsList } = updateStatisticsUpdatesListResults;
    batch(() => {
      dispatch(dataActions.setStateDataCollection('countriesList', countriesList));
      dispatch(settingsActions.setStateSettingsList('settingsList', settingsList));
      dispatch(statisticsActions.setStateStatisticsList(statisticsList));
      if (validationUtils.isExists(statisticsUpdatesList)) {
        dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesList(statisticsUpdatesList));
        dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesSettingsList(statisticsUpdatesSettingsList));
      }
    });
  };
  const onSetStateUpdateCountryVisibility = (data) => {
    const { countriesList, countriesNameIdList, statisticsList, statisticsUpdatesList } = data;
    batch(() => {
      dispatch(dataActions.setStateDataCollection('countriesList', countriesList));
      dispatch(dataActions.setStateDataCollection('countriesNameIdList', countriesNameIdList));
      dispatch(statisticsActions.setStateStatisticsList(statisticsList));
      if (validationUtils.isExists(statisticsUpdatesList)) {
        dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesList(statisticsUpdatesList));
      }
    });
  };

  // Run the engine.
  useEffect(() => {
    engineService.runEngine({
      mode: props.mode,
      onSetStateCurrentTime: onSetStateCurrentTime,
      onSetStateSettingsList: onSetStateSettingsList,
      onSetStateStatisticsField: onSetStateStatisticsField,
      onSetStateStatisticsList: onSetStateStatisticsList,
      onSetStateStatisticsUpdatesSettingsList: onSetStateStatisticsUpdatesSettingsList,
      onSetStateInitiateSettings: onSetStateInitiateSettings,
      onSetStateInitiateSources: onSetStateInitiateSources,
      onSetStateUpdateRound: onSetStateUpdateRound,
      onSetStateDataCollection: onSetStateDataCollection,
      onSetStateActionUpdate: onSetStateActionUpdate,
      onSetStateActionRefresh: onSetStateActionRefresh,
      onSetStateUpdateCountryVisibility: onSetStateUpdateCountryVisibility
    });
    return () => {
      engineService.clearSources();
    };
  }, []);

  // Set loader for each master action.
  useEffect(() => {
    engineService.updateActionLoader(false);
  }, [countriesList]);

  // After exit from any modal - Scroll back to the element's vertical position.
  const scrollToCountry = useCallback((data) => {
    const { action, value } = data;
    if (action === 'modal' && !value && activeModalValue && !isReplaceModalMode && activeModalName !== 'country') {
      setTimeout(() => {
        const offsetTop = elRefs.current.find(c => c.current?.dataset?.countryId === activeModalValue).current.offsetTop;
        if (offsetTop > window.innerHeight) {
          window.scrollTo(0, offsetTop);
        }
      }, 10);
    }
  }, [elRefs, activeModalValue, isReplaceModalMode]);

  // Update action on master modal click.
  const handleActionClick = useCallback((e) => {
    if (!isActionLoader) {
      const data = {
        action: coreUtils.getAttributeName(e, 'data-action'),
        value: coreUtils.getAttributeName(e, 'name'),
        id: coreUtils.getAttributeName(e, 'data-country-id')
      };
      scrollToCountry(data);
      engineService.runMasterActionClick(data);
    }
  }, [elRefs, activeModalValue, isReplaceModalMode]);

  // Update action on relevant modal change.
  const handleModalActionChange = useCallback((e) => {
    engineService.runModalActionUpdate({
      modalName: coreUtils.getAttributeName(e, 'data-modal-name'),
      action: coreUtils.getAttributeName(e, 'data-action'),
      value: coreUtils.getValue(e)
    });
  }, []);

  // Validate all OK to show the data and generate the countries.
  const isInitiateComplete = !isDisplayError && validationUtils.isExists(countriesList) && loadingPercentage === 100;
  const renderCountries = useCallback(() => {
    const countriesDOM = [];
    const refsList = [];
    for (let i = 0; i < countriesList.length; i++) {
      const country = countriesList[i];
      const ref = elRefs.current[i] || createRef();
      refsList.push(ref);
      countriesDOM.push(
        (<CountryBox
          key={country.id}
          {...country} // React memo works only with seperated properties.
          isRefreshMode={isRefreshMode}
          sourcesList={sourcesList}
          onActionClick={handleActionClick}
          ref={ref}
        />));
    }
    elRefs.current = refsList;
    return countriesDOM;
  }, [countriesList]);

  return (
    <div className="main">
      {!isScreenLoaderComplete &&
        <ScreenLoader
          isActive={isActive}
          loadingList={loadingList}
          isDisplayError={isDisplayError}
        />
      }
      {isDisplayError &&
        <Error
          isDisplayError={isDisplayError}
        />
      }
      {activeModalName &&
        <ModalContainer
          onActionClick={handleActionClick}
          onActionChange={handleModalActionChange}
        />
      }
      {isInitiateComplete &&
        <div className="page">
          <div className="main-container">
            <div className={`container ${viewType} f32 f32-extra locations`}>
              <MasterBox
                onActionClick={handleActionClick}
              />
              {renderCountries()}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default App;