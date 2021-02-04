import './MasterActionLoader.scss';
import { Icon } from '../../../UI';

const MasterActionLoader = (props) => {
    const { refreshSourceName } = props;

    return (
        <div className="action-loader">
            <Icon
                name="sync-alt"
                isSpin={true}
            />
            {refreshSourceName &&
                <div className="source">
                    Source: {refreshSourceName}
                </div>
            }
        </div>
    );
};

export default MasterActionLoader;