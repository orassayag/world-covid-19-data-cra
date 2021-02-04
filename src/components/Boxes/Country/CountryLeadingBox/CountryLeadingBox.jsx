import './CountryLeadingBox.scss';
import { Icon } from '../../../UI';

const CountryLeadingBox = (props) => {
    const { leadingClassName, innerLeadingClassName, leadingValueDisplay, leadingIconName } = props;

    return (
        <div className={`leading-box${leadingClassName}`}>
            {leadingValueDisplay && leadingIconName &&
                <div className="icon">
                    <Icon
                        name={leadingIconName}
                    />
                </div>
            }
            <div className={innerLeadingClassName}>
                {leadingValueDisplay}
            </div>
        </div>
    );
};

export default CountryLeadingBox;