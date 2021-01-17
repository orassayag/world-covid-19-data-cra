import React from 'react';
import './CreditsLink.scss';

const CreditsLink = (props) => {
  const { link, title, tooltip, isLast } = props;

  return (
    <div className="link">
      <a href={link} rel="noopener noreferrer" alt={tooltip} title={tooltip} target="_blank">{title}</a>{isLast ? '' : ' | '}
    </div>

  );
};

export default CreditsLink;