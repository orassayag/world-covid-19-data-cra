import React from 'react';
import './CountryRemove.scss';
import { Icon } from '../../../UI';

const CountryRemove = () => {
    return (
        <div className="remove">
            <Icon
                name="times"
                iconName="remove"
            />
        </div>
    );
};

export default CountryRemove;