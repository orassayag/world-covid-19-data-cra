import './MasterView.scss';
import { ButtonIcon } from '../../../UI';

const MasterView = (props) => {
    const { viewType, value, action, viewTitle, viewsIconNames, viewsIconTooltips, viewsIconAttributeNames, onClick } = props;
    const iconsDOM = [];
    for (let i = 0; i < 2; i++) {
        iconsDOM.push((
            <div className="icon" key={i}>
                <ButtonIcon
                    name={viewsIconNames[i]}
                    value={viewsIconAttributeNames[i] === value ? 'on' : ''}
                    action={action}
                    tooltip={viewsIconTooltips[i]}
                    iconName={viewsIconAttributeNames[i]}
                    onClick={onClick}
                />
            </div>
        ));
    }

    return (
        <div className={`view ${viewType}`}>
            <div className="title">
                {viewTitle}
            </div>
            {iconsDOM}
        </div>
    );
};

export default MasterView;