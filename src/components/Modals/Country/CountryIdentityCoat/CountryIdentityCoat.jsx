import './CountryIdentityCoat.scss';

const CountryIdentityCoat = (props) => {
  const { coatClassName } = props;

  return (
    <div className="coat-container">
      {coatClassName &&
        <div className={`coat ${coatClassName}`}></div>
      }
    </div>
  );
};

export default CountryIdentityCoat;