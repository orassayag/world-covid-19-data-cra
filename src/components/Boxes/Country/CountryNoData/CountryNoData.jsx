import './CountryNoData.scss';

const CountryNoData = () => {

    return (
        // ToDo: Convert to Icon component.
        <div className="no-data-container">
            <div className="icon">
                <i className="fas fa-search"></i>
            </div>
            <div className="title">
                No Data Found
            </div>
        </div>
    );
};

export default CountryNoData;