import Icon from '../Icon/Icon';

const ButtonIcon = (props) => {
    const { name, value, action, type, tooltip, tooltipDirection, iconName, onClick } = props;

    return (
        <button onClick={onClick} data-action={action}>
            <Icon
                name={name}
                value={value}
                type={type}
                tooltip={tooltip}
                tooltipDirection={tooltipDirection}
                iconName={iconName}
            />
        </button>
    );
};

export default ButtonIcon;