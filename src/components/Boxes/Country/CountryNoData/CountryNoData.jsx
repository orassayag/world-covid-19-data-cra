import './CountryNoData.scss';
import { Icon } from '../../../UI';

const CountryNoData = () => {

    return (
        <div className="no-data-container">
            <Icon
                name="fa-search"
            />
            <div className="title">
                No Data Found
            </div>
        </div>
    );
};

export default CountryNoData;