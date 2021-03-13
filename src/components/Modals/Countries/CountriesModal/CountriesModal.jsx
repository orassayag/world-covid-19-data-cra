import './CountriesModal.scss';

const CountriesModal = (props) => {
  const { onActionClick } = props;

  return (
    <div className="modal-content countries f32 f32-extra">
      <div className="content">
        <button onClick={onActionClick} data-action="modal">
          <i className="fas fa-times"></i>
        </button>
        <div className="countries-container">
          <div className="countries-actions">
            <div className="icons">
              <i className="fas fa-globe"></i>
              <i className="fas fa-list"></i>
              <i className="far fa-file"></i>
            </div>
            <div className="search-country">
              <div className="search-country-container">
                <input type="text" name="search-country"></input>
              </div>
              <div className="search-button">
                <button onClick={() => { }}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="selector">
                <div className="select">
                  <select name="select" value="name" onChange={() => { }}>
                    <option value="name">Country name</option>
                    <option value="code2">2 Char code</option>
                    <option value="code3">3 Char code</option>
                    <option value="numeric">Numeric code</option>
                    <option value="continent">Continent</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="countries-list">
            <div className="country active">
              <div className="image">
                <i className="flag-extra _Donetsk"></i>
              </div>
              <div className="code">
                AU
                         </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country active">
              <div className="image">
                <i className="flag-extra _Donetsk"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country active">
              <div className="image">
                <i className="flag-extra _Donetsk"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country active">
              <div className="image">
                <i className="flag-extra _Donetsk"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country active">
              <div className="image">
                <i className="flag-extra _Donetsk"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country active">
              <div className="image">
                <i className="flag-extra _Donetsk"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
            <div className="country">
              <div className="image">
                <i className="flag ad"></i>
              </div>
              <div className="code">
                AU
                     </div>
            </div>
          </div>
          <div className="actions">
            <div className="confirm-container">
              <button onClick={onActionClick} data-action="modal">OK</button>
            </div>
            <div className="current-country">
              Bonaire (Caribbean Netherlands)
                         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesModal;