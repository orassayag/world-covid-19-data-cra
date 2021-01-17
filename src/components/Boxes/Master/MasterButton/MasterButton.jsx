import React from 'react';
import './MasterButton.scss';

const MasterButton = (props) => {
    const { buttonText, buttonName, onActionClick } = props;

    return (
        <button className="option" onClick={onActionClick} name={buttonName} data-action="modal">
            <div className="title">
                {buttonText}
            </div>
        </button>
    );
};

export default MasterButton;