import './CreditsModal.scss';
import CreditsExitButton from '../CreditsExitButton/CreditsExitButton';
import CreditsLink from '../CreditsLink/CreditsLink';
import CreditsOkButton from '../CreditsOkButton/CreditsOkButton';
import { creditService } from '../../../../services';

const CreditsModal = (props) => {
  const { onActionClick } = props;
  const { created, creator, years, tooltip } = creditService.getFooterCreatorCredits();
  const creditsLinksDOM = [];
  for (let i = 0; i < creditService.allCredits.length; i++) {
    const { id, link, title, tooltip } = creditService.allCredits[i];
    creditsLinksDOM.push((
      <CreditsLink
        key={id}
        link={link}
        title={title}
        tooltip={tooltip}
        isLast={i === creditService.allCredits.length - 1}
      />
    ));
  }

  return (
    <div className="modal-content credits f16 f16-extra">
      <div className="content">
        <CreditsExitButton
          onActionClick={onActionClick}
        />
        <div className="credits">
          <div className="title">
            Credits
          </div>
          <div className="data">
            {creditsLinksDOM}
          </div>
          <div className="note">
            <span>Please note:</span> The project is not yet finished, and not all functionality works.
          Feel free to <a href="mailto:orassayag@gmail.com">contact me</a> for any mistakes, bugs or have
          any comments or ideas to share.
          </div>
          <div className="creator">
            {created} <a href={creditService.allCredits[3].link} rel="noopener noreferrer" alt={tooltip} title={tooltip} target="_blank">{creator}</a>, {years}
          </div>
        </div>
        <CreditsOkButton
          onActionClick={onActionClick}
        />
      </div>
    </div>
  );
};

export default CreditsModal;