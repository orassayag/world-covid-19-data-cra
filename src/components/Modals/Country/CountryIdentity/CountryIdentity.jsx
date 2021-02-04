import './CountryIdentity.scss';
import CountryIdentityFlag from '../CountryIdentityFlag/CountryIdentityFlag';
import CountryIdentityCoat from '../CountryIdentityCoat/CountryIdentityCoat';
import CountryIdentityDetails from '../CountryIdentityDetails/CountryIdentityDetails';

const CountryIdentity = (props) => {
  const { displayName, bigFlagClassName, coatClassName, countryDetailsList } = props;

  return (
    <div className="country-identity">
      <CountryIdentityFlag
        bigFlagClassName={bigFlagClassName}
      />
      <CountryIdentityDetails
        displayName={displayName}
        countryDetailsList={countryDetailsList}
      />
      <CountryIdentityCoat
        coatClassName={coatClassName}
      />
    </div>
  );
};

export default CountryIdentity;