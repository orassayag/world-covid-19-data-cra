import React from 'react';
import './MasterButtons.scss';
import MasterButton from '../MasterButton/MasterButton';

const MasterButtons = (props) => {
    const { onActionClick } = props;
    const buttonTexts = ['Manage Countries', 'Manage Sources'];
    const buttonNames = ['countries', 'sources'];
    const buttonsDOM = [];
    for (let i = 0; i < 2; i++) {
        buttonsDOM.push((
            <MasterButton
                key={i}
                buttonText={buttonTexts[i]}
                buttonName={buttonNames[i]}
                onActionClick={onActionClick}
            />
        ));
    }

    return (
        <div className="buttons">
            {buttonsDOM}
        </div>
    );
};

export default MasterButtons;