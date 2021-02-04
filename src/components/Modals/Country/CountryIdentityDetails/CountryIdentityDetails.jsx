import './CountryIdentityDetails.scss';
import CountryIdentityDetailsList from '../CountryIdentityDetailsList/CountryIdentityDetailsList';
import CountryIdentityTitle from '../CountryIdentityTitle/CountryIdentityTitle';

const CountryIdentityDetails = (props) => {
  const { displayName, countryDetailsList } = props;

  return (
    <div className="identity-details">
      <CountryIdentityTitle
        displayName={displayName}
      />
      <CountryIdentityDetailsList
        countryDetailsList={countryDetailsList}
      />
    </div>
  );
};

export default CountryIdentityDetails;