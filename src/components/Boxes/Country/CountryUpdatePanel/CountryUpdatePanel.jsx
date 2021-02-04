import './CountryUpdatePanel.scss';
import CountryUpdateNumber from '../CountryUpdateNumber/CountryUpdateNumber';

const CountryUpdatePanel = (props) => {
    const { updateSourceData } = props;
    if (!updateSourceData) {
        return null;
    }
    const { sourceName, dataItems } = updateSourceData;
    const itemsDOM = [];
    for (let i = 0; i < dataItems.length; i++) {
        itemsDOM.push((
            <CountryUpdateNumber
                key={i}
                dataItem={dataItems[i]}
            />
        ));
    }

    return (
        <div className={`update-panel ${sourceName}`}>
            <div className="inner">
                <div className="changes">
                    {itemsDOM}
                </div>
            </div>
        </div>
    );
};

export default CountryUpdatePanel;