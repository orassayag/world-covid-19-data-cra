import './MasterLastUpdate.scss';
import { Icon } from '../../../UI';

const MasterLastUpdate = (props) => {
    const { lastUpdateDateDisplay, lastUpdateSourceName, nextUpdateSourceName } = props;

    return (
        <div className="last-item">
            {lastUpdateDateDisplay && lastUpdateSourceName && nextUpdateSourceName &&
                <>
                    <div className="icon">
                        <Icon
                            name="sync-alt"
                            tooltip="The last update time"
                        />
                    </div>
                    <div className="time">
                        <span className="time-ago">{lastUpdateDateDisplay} ago | {lastUpdateSourceName}
                            <Icon
                                name="long-arrow-alt-right"
                            /> {nextUpdateSourceName}</span>
                    </div>
                </>
            }
        </div>
    );
};

export default MasterLastUpdate;