import React, { memo } from 'react';
import './MasterOptions.scss';
import MasterButtons from '../MasterButtons/MasterButtons';
import MasterViews from '../MasterViews/MasterViews';

const MasterOptions = memo((props) => {
    const { viewType, colorType, sortDirection, onActionClick } = props;

    return (
        <div className="options">
            <MasterButtons
                onActionClick={onActionClick}
            />
            <MasterViews
                viewType={viewType}
                colorType={colorType}
                sortDirection={sortDirection}
                onActionClick={onActionClick}
            />
        </div>
    );
});

export default MasterOptions;