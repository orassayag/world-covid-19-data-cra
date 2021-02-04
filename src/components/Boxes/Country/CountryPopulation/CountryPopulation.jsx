import './CountryPopulation.scss';
import { Icon } from '../../../UI';

const CountryPopulation = (props) => {
    const { populationCountDisplay, populationPercentageDisplay } = props;

    return (
        <div className="population">
            <div className="icon">
                <Icon
                    name="users"
                />
            </div>
            <div className="number">
                {populationCountDisplay}{populationPercentageDisplay ? ` (${populationPercentageDisplay}%)` : ''}
            </div>
        </div>
    );
};

export default CountryPopulation;