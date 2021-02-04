import { memo } from 'react';
import './MasterHeader.scss';
import MasterBinaryClock from '../MasterBinaryClock/MasterBinaryClock';
import MasterHeaderIcon from '../MasterHeaderIcon/MasterHeaderIcon';
import { DataMode } from '../../../../core/enums';

const MasterHeader = memo((props) => {
    const { isLiveMode, isRecoverMode, currentTime, leadingSource, lastUpdateSourceName, isLastUpdateChanges, totalVisibleCountriesCount } = props;
    const dataModDisplay = isRecoverMode ? DataMode.RECOVER : (isLiveMode ? DataMode.LIVE : DataMode.LOCAL);
    const iconNames = ['map-marker-alt', 'database', 'server'];
    const iconTooltips = ['Active countries count', 'Active sources count', 'Leading source name'];
    const values = [totalVisibleCountriesCount, 8, leadingSource.upperName];
    const valuesClasses = ['', '', ` source${leadingSource.upperName === lastUpdateSourceName && isLastUpdateChanges ? ' alert' : ''}`];
    const itemsDOM = [];
    for (let i = 0; i < 3; i++) {
        itemsDOM.push(
            (<MasterHeaderIcon
                key={i}
                iconName={iconNames[i]}
                iconTooltip={iconTooltips[i]}
                value={values[i]}
                valueClass={valuesClasses[i]}
            />)
        );
    }

    return (
        <div className="logo-holder">
            <div className="line1">
                <h3>World Covid</h3>
                <div className="items">
                    {itemsDOM}
                </div>
                <MasterBinaryClock
                    currentTime={currentTime}
                />
            </div>
            <div className="line2">
                <p>Covid 19 World Data<span> | <span className="mode">{dataModDisplay}</span> mode</span></p>
            </div>
        </div>
    );
});

export default MasterHeader;