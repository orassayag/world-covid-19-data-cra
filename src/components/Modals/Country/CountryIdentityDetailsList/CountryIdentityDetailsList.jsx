import './CountryIdentityDetailsList.scss';
import CountryIdentityDetailsItem from '../CountryIdentityDetailsItem/CountryIdentityDetailsItem';

const CountryIdentityDetailsList = (props) => {
  const { countryDetailsList } = props;
  const itemsDOM = [];
  for (let i = 0; i < countryDetailsList.length; i++) {
    itemsDOM.push(
      (<CountryIdentityDetailsItem
        key={i}
        countryIdentityItem={countryDetailsList[i]}
      />)
    );
  }

  return (
    <div className="details-list">
      {itemsDOM}
    </div>
  );
};

export default CountryIdentityDetailsList;