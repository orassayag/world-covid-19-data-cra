import React from 'react';
import './MasterUpdateLoader.scss';
import { Icon } from '../../../UI';

const MasterUpdateLoader = (props) => {
    const { isSpin } = props;
    if (!isSpin) {
        return null;
    }

    return (
        <div className="update-loader">
            <Icon
                name="sync-alt"
                isSpin={true}
            />
        </div>
    );
};

export default MasterUpdateLoader;