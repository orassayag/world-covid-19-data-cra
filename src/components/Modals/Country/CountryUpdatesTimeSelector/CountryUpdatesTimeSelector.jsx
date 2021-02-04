import './CountryUpdatesTimeSelector.scss';

const CountryUpdatesTimeSelector = (props) => {
  const { onActionChange, updatesHoursCount } = props;

  return (
    <div className="time-selector">
      <select data-action="select-time" value={updatesHoursCount} onChange={onActionChange}>
        <option value="1">1h ago</option>
        <option value="2">2h ago</option>
        <option value="3">3h ago</option>
        <option value="5">5h ago</option>
      </select>
    </div>
  );
};

export default CountryUpdatesTimeSelector;