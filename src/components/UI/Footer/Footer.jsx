import './Footer.scss';
import { creditService } from '../../../services';

const Footer = () => {
    const { created, creator, years, tooltip } = creditService.getFooterCreatorCredits();
    return (
        <div className="footer">
            {created} <a href={creditService.allCredits[3].link} rel="noopener noreferrer" alt={tooltip} title={tooltip} target="_blank">{creator}</a>, {years}
        </div>
    );
};

export default Footer;