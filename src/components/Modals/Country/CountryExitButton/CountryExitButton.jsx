const CountryExitButton = (props) => {
    const { onActionClick } = props;

    return (
        <button onClick={onActionClick} data-action="modal">
            <i className="fas fa-times"></i>
        </button>
    );
};

export default CountryExitButton;