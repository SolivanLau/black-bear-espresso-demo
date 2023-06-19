import { socialData } from '../data/contactData';
import Icon from './Icon';

const Socialbar = ({ listClass, itemClass }) => {
  const socialLinks = socialData.socialLinks;
  return (
    <ul className={`socialbar ${listClass}`}>
      {socialLinks.map((social) => {
        return (
          <li key={social.id} className={itemClass}>
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <Icon {...social} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Socialbar;
