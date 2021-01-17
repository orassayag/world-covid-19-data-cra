import React from 'react';
import './CountryIdentityTitle.scss';

const CountryIdentityTitle = (props) => {
  const { displayName } = props;

  return (
    <div className="title">
      {displayName}
    </div>
  );
};

export default CountryIdentityTitle;