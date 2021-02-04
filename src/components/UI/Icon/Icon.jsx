const Icon = (props) => {
    const { name, value, type, tooltip, tooltipDirection, iconName, isSpin } = props;
    const tooltipAttr = tooltip ? { [`data-tip-${tooltipDirection ? tooltipDirection : 'top'}`]: tooltip } : null;

    return (
        <span {...tooltipAttr}>
            <i className={`fa${type ? type : 's'} fa-${name}${isSpin ? ' fa-spin' : ''}${value ? ` ${value}` : ''}`} name={iconName}></i>
        </span>
    );
};

export default Icon;