import { memo } from 'react';
import './MasterActions.scss';
import { ButtonIcon, LinkIcon } from '../../../UI';
import { creditService } from '../../../../services';

const MasterActions = memo((props) => {
    const { isActive, isLiveMode, isRecoverMode, onActionClick } = props;
    const actionIconNames = ['power-off', 'sync', 'chart-pie', 'home', 'globe-americas', 'tools', 'user-circle'];
    const actions = ['active', 'refresh', 'modal', 'local', 'live', 'mode', 'modal'];
    const actionValues = [isActive ? 'on' : 'off', null, null, isLiveMode ? 'off' : 'on', isLiveMode ? 'on' : 'off', isRecoverMode ? 'on' : 'off', null];
    const actionIconAttributeNames = ['active', 'refresh', 'statistics', 'local', 'live', 'recover', 'credits'];
    const actionIconTooltips = [`Active (${isActive ? 'On' : 'Off'})`, 'Refresh data', 'Statistics', 'Local data mode', 'Live data mode', `Recover data mode (${isRecoverMode ? 'On' : 'Off'})`, 'Credits'];
    const actionFunctions = [onActionClick, onActionClick, onActionClick, onActionClick, onActionClick, null, onActionClick];
    const iconsDOM = [];
    for (let i = 0; i < 7; i++) {
        iconsDOM.push((
            <ButtonIcon
                key={i}
                name={actionIconNames[i]}
                action={actions[i]}
                value={actionValues[i]}
                tooltip={actionIconTooltips[i]}
                iconName={actionIconAttributeNames[i]}
                onClick={actionFunctions[i]}
            />
        ));
    }
    for (let i = 0; i < creditService.masterCredits.length; i++) {
        const { title, link, iconName, iconType, iconTooltip } = creditService.masterCredits[i];
        iconsDOM.push((
            <LinkIcon
                key={i}
                name={iconName}
                link={link}
                type={iconType}
                tooltip={iconTooltip}
                iconName={title}
            />
        ));
    }

    return (
        <div className="actions">
            {iconsDOM.slice(0, 3)}
            <div className="mode">
                Mode
            </div>
            {iconsDOM.slice(3, 6)}
            <div className="contact">
                Help
            </div>
            {iconsDOM.slice(6, 10)}
        </div>
    );
});

export default MasterActions;