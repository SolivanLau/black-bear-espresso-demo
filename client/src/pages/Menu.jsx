// libraries
import { Link } from 'react-router-dom';
//data
import { menuData } from '../data/contentData';
// Components
import MetaData from '../components/MetaData';
import SectionHeader from '../components/SectionHeader';
import DrinkMenu from '../components/DrinkMenu';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Menu = () => {
  // submenu set up
  const drinksSubmenu = [
    { name: 'hot', id: 'hotDrinks' },
    { name: 'tea', id: 'tea' },
    { name: 'cold', id: 'coldDrinks' },
    { name: 'frappes', id: 'frappes' },
    { name: 'extra', id: 'extra' },
  ];
  const [submenu, setSubmenu] = useState(drinksSubmenu);
  return (
    <>
      <MetaData title={'Menu'} />
      <section className="menu">
        <SectionHeader {...menuData} />

        <div className="wrapper">
          {/* MENU NAVIGATION */}
          <nav className="menuNav">
            <ul className="menuNavList">
              <li className="menuNavItem">
                <a href="#drinkMenu">Drinks</a>
              </li>
              <li className="menuNavItem">
                <a>Pastries</a>
              </li>
              <li className="menuNavItem">
                <a>Desserts</a>
              </li>
            </ul>
            <div className="menuSubNav">
              <ul className="menuSubNavList">
                {submenu.map((item) => {
                  const { name, id } = item;
                  const key = nanoid();
                  return (
                    <li key={key}>
                      <a href={`#${id}`}>{name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* DRINK MENU */}
          <DrinkMenu />
        </div>
      </section>
    </>
  );
};
export default Menu;
