import './MasterTimes.scss';
import MasterCurrentTime from '../MasterCurrentTime/MasterCurrentTime';
import MasterLastUpdate from '../MasterLastUpdate/MasterLastUpdate';
import MasterUpdateLoader from '../MasterUpdateLoader/MasterUpdateLoader';

const MasterTimes = (props) => {
    const { currentTime, isUpdateLoaderDisplay, lastUpdateDateDisplay, lastUpdateSourceName, nextUpdateSourceName } = props;

    return (
        <div className="times-container">
            <div className="times">
                <MasterCurrentTime
                    currentTime={currentTime}
                />
                <MasterLastUpdate
                    lastUpdateDateDisplay={lastUpdateDateDisplay}
                    lastUpdateSourceName={lastUpdateSourceName}
                    nextUpdateSourceName={nextUpdateSourceName}
                />
            </div>
            <div className="update-loader-container">
                <MasterUpdateLoader
                    isSpin={isUpdateLoaderDisplay}
                />
            </div>
        </div>
    );
};

export default MasterTimes;