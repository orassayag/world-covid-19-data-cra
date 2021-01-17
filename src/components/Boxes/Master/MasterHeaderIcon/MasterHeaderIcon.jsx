import React from 'react';
import './MasterHeaderIcon.scss';
import { Icon } from '../../../UI';

const MasterHeaderIcon = (props) => {
    const { iconName, iconTooltip, value, valueClass } = props;

    return (
        <div className="item">
            <div className="icon">
                <Icon
                    name={iconName}
                    tooltip={iconTooltip}
                    tooltipDirection="bottom"
                />
            </div>
            <div className={`value${valueClass}`}>
                {value}
            </div>
        </div>
    );
};

export default MasterHeaderIcon;