import './MasterViews.scss';
import MasterView from '../MasterView/MasterView';
import { enumService } from '../../../../services';

const MasterViews = (props) => {
    const { viewType, colorType, sortDirection, onActionClick } = props;
    const viewsOptions = [viewType, colorType, sortDirection];
    const viewActions = ['view', 'color', 'direction'];
    const viewTypes = ['views', 'colors', 'directions'];
    const viewTitles = ['Views', 'Colors', 'Directions'];
    const viewIconNames = [['grip-vertical', 'grip-horizontal'], ['moon', 'sun'], ['sort-amount-up-alt', 'sort-amount-down-alt']];
    const viewIconTooltips = [['Vertical view', 'Horizontal view'], ['Night colors', 'Day colors'], ['Ascending direction', 'Descending direction']];
    const viewsDOM = [];
    for (let i = 0; i < 3; i++) {
        viewsDOM.push((
            <MasterView
                key={i}
                value={viewsOptions[i]}
                action={viewActions[i]}
                viewType={viewTypes[i]}
                viewTitle={viewTitles[i]}
                viewsIconNames={viewIconNames[i]}
                viewsIconTooltips={viewIconTooltips[i]}
                viewsIconAttributeNames={enumService.viewIconAttributeNames[i]}
                onClick={onActionClick}
            />
        ));
    }

    return (
        <div className="views">
            {viewsDOM}
        </div>
    );
};

export default MasterViews;