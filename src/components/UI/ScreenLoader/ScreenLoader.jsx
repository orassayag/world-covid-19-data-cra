import React from 'react';
import './ScreenLoader.scss';
import { Icon } from '../';

const ScreenLoader = (props) => {
    const { isActive, loadingList, isDisplayError } = props;
    if (!isActive) {
        return null;
    }
    const { loadingPrecentage, loadingSourceName, loadingQuote } = loadingList;
    const { quote, quoteName, quoteNameURL, categoryName, categoryIconName, categoryIconType } = loadingQuote;
    const dotsDOM = [];
    for (let i = 0; i < 3; i++) {
        dotsDOM.push(
            (<span key={i} className="loader__dot">.</span>)
        );
    }

    return (
        <div className={`loader${!isDisplayError && loadingPrecentage === 100 ? ' hide' : ''}`}>
            <div className="container">
                <div className="title">
                    Fetching data{dotsDOM}
                </div>
                <div className="flex-wrapper">
                    <div className="single-chart">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                            <path className="circle-bg"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path className="circle"
                                strokeDasharray={`${loadingPrecentage}, 100`}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.35" className="percentage">{loadingPrecentage}%</text>
                        </svg>
                    </div>
                </div>
                <div className="text">{loadingSourceName && `${`Source: ${loadingSourceName}`}`}</div>
                <div className="quote">
                    <blockquote>
                        {quote}"
                        <div className="bottom-quote">
                            <div className="person">
                                <div className="name">
                                    <a href={quoteNameURL} rel="noopener noreferrer" target="_blank">- {quoteName}</a>
                                </div>
                            </div>
                            <div className="icon-container">
                                <div className="icon-image">
                                    <Icon
                                        name={categoryIconName}
                                        type={categoryIconType}
                                    />
                                </div> |
                                <div className="icon-name">
                                    {categoryName}
                                </div>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default ScreenLoader;