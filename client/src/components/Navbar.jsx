// styles and libraries
import { Link } from 'react-router-dom';
import { useState } from 'react';
// data and assets
import { navData } from '../data/navData';
import { iconData } from '../data/contentData';
import logo from '../assets/images/logo.jpg';
// components
import Socialbar from './Socialbar';
import Icon from './Icon';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navMenu">
      <Link to="/" className="logoContainer">
        <img src={logo} alt="Black Bear Espresso Logo" />
      </Link>
      <div className="navContainer">
        <ul className={menuOpen ? 'navbar menuOpen' : 'navbar'}>
          {navData.map(({ id, endpoint, title }) => {
            return (
              <li key={id}>
                <Link to={endpoint} className="navLink">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className="mobileMenu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <Icon {...iconData.closeMenu} />
          ) : (
            <Icon {...iconData.mobileMenu} />
          )}
        </button>
        <Socialbar listClass={'navSocialList'} itemClass={'navSocialItem'} />
      </div>
    </nav>
  );
};
export default Navbar;
