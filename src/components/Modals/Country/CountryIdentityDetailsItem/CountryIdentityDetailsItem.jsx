import React from 'react';
import './CountryIdentityDetailsItem.scss';
import { Icon } from '../../../UI';

const CountryIdentityDetailsItem = (props) => {
  const { itemClassName, iconName, iconTooltip, iconType, value, isLastItem, isIconOnly, isURL, urlText } = props.countryIdentityItem;
  let valueContainerDOM = null;
  if (isURL) {
    valueContainerDOM = (<a href={value} rel="noopener noreferrer" target="_blank">{urlText}</a>);
  }
  else {
    const iconDOM = (<Icon
      name={iconName}
      type={iconType}
      tooltip={null}
      tooltipDirection={null}
    />);
    valueContainerDOM = isIconOnly ? (<a href={value} rel="noopener noreferrer" target="_blank">{iconDOM}</a>) : iconDOM;
  }

  return (
    <div className={`details-item${itemClassName}`}>
      <span className="icon" data-tip-country={iconTooltip}>
        {valueContainerDOM}
        {isIconOnly || isURL ? '' : value}
      </span>
      {!isLastItem &&
        <span>|</span>
      }
    </div>
  );
};

export default CountryIdentityDetailsItem;