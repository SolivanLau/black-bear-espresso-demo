// libraries
import { Link } from 'react-router-dom';
// data
import { navData } from '../data/navData';
import { locationData, socialData } from '../data/contactData';
// components
import HoursDisplay from './HoursDisplay';
import Socialbar from './Socialbar';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        {/* hours of operation */}
        <div className="footerHours footerItem">
          <h4>Hours</h4>
          <HoursDisplay
            listClass={'footerHrsList'}
            itemClass={'footerHrsItem'}
          />
        </div>
        {/* navigation */}
        <div className="footerNav footerItem">
          <h4>Navigation</h4>
          <ul className="footerNavList">
            {navData.map(({ id, endpoint, title }) => {
              return (
                <li key={id} className="footerNavItem">
                  <Link to={endpoint}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* contact */}
        <div className="footerContact footerItem">
          <h4>Contact</h4>
          <div className="footerContactContainer">
            <div className="footerContactList">
              <p className="footerContactItem">{socialData.email}</p>
              <p className="footerContactItem">{socialData.phone}</p>
              <p className="footerContactItem">
                {locationData.addressStreet} {locationData.addressRegion}
              </p>
            </div>
            <Socialbar
              listClass={'footerSocial navSocialList'}
              itemClass={'navSocialItem'}
            />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        {/* copyright */}
        copyright © {new Date().getFullYear()} |
        <a href="https://black-bear-demo.netlify.app">Black Bear Espresso</a>
      </div>
    </footer>
  );
};
export default Footer;
