import './MasterCurrentTime.scss';
import { Icon } from '../../../UI';
import { timeUtils } from '../../../../utils';

const MasterCurrentTime = (props) => {
    const { currentTime } = props;

    return (
        <div className="current-item">
            <div className="icon">
                <Icon
                    name="clock"
                    tooltip="The current time"
                />
            </div>
            <div className="time">
                {currentTime &&
                    <div className="current-time">{timeUtils.getDateTimeDisplay(currentTime)} UTC</div>
                }
            </div>
        </div>
    );
};

export default MasterCurrentTime;