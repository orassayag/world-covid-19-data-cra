import './CountryUpdates.scss';
import CountryUpdatesData from '../CountryUpdatesData/CountryUpdatesData';
import CountryUpdatesTimeSelector from '../CountryUpdatesTimeSelector/CountryUpdatesTimeSelector';
import { textUtils } from '../../../../utils';

const CountryUpdates = (props) => {
  const { onActionChange, updatesList, updatesHoursCount } = props;

  return (
    <div className="country-updates">
      <div className="latest-updates">
        <div className="title">
          Latest Updates ({textUtils.getStringCommaFromNumber(updatesList.length)})
        </div>
        <CountryUpdatesTimeSelector
          updatesHoursCount={updatesHoursCount}
          onActionChange={onActionChange}
        />
      </div>
      <CountryUpdatesData
        updatesList={updatesList}
      />
    </div>
  );
};

export default CountryUpdates;