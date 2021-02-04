import { Icon } from '../../../UI';

const CreditsExitButton = (props) => {
  const { onActionClick } = props;

  return (
    <button onClick={onActionClick} data-action="modal">
      <Icon
        name="times"
      />
    </button>
  );
};

export default CreditsExitButton;