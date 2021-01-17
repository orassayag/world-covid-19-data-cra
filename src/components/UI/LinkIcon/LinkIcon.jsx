import React from 'react';
import Icon from '../Icon/Icon';

const LinkIcon = (props) => {
    const { name, link, type, tooltip, tooltipDirection, iconName } = props;

    return (
        <a href={link} rel="noopener noreferrer" target="_blank">
            <Icon
                name={name}
                type={type}
                tooltip={tooltip}
                tooltipDirection={tooltipDirection}
                iconName={iconName}
            />
        </a>
    );
};

export default LinkIcon;