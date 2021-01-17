import React from 'react';
import './Error.scss';

const Error = (props) => {
    const { isDisplayError } = props;

    return (
        <div className={`error-container${isDisplayError ? ' active' : ''}`}>
            <div className="error-content">
                <i className="fas fa-frown"></i>
                <div className="error-information">
                    <div className="error-title">
                        Oppss... Something bad happen...
                    </div>
                    <div className="error-description">
                        An unexpected error has been occurred
                    </div>
                    <div className="error-code">
                        Error code: 1000014
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;