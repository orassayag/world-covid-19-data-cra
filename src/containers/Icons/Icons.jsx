import { useState, useEffect } from 'react';
import './Icons.scss';
import { Icon } from '../../components';
import { quoteService } from '../../services';

const IconBox = (props) => {
  const { icon } = props;
  const { iconType, iconName } = quoteService.getIconType(icon);
  return (
    <div className="item">
      <Icon
        name={iconName}
        value={null}
        type={iconType}
        tooltip={null}
        tooltipDirection={null}
        iconName={null}
        isSpin={false}
      />
      <h2>{icon}</h2>
    </div>
  );
};

const Icons = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(quoteService.getAllIcons());
  }, []);

  const iconsDOM = [];
  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      iconsDOM.push(
        (<IconBox
          key={i}
          icon={list[i]}
        />)
      );
    }
  }

  return (
    <div className="container-icons">
      {iconsDOM}
    </div>
  );
};

export default Icons;