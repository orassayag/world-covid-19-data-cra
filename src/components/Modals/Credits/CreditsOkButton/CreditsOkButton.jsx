import './CreditsOkButton.scss';

const CreditsOkButton = (props) => {
  const { onActionClick } = props;

  return (
    <div className="confirm-container">
      <button onClick={onActionClick} data-action="modal">OK</button>
    </div>
  );
};

export default CreditsOkButton;