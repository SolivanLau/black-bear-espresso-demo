//data
import { menuData } from '../data/contentData';
//components
import MenuSection from './MenuSection';
const DrinkMenu = () => {
  const { hotDrinks, tea, coldDrinks, frappes, extras, syrups, altMilk } =
    menuData.menu.drink;
  return (
    <div className="drinkGrid" id="drinkMenu">
      <MenuSection {...hotDrinks} />
      <MenuSection {...tea} />
      <MenuSection {...coldDrinks} />
      <MenuSection {...frappes} />
      <MenuSection {...extras} />
      <MenuSection {...syrups} />
      <MenuSection {...altMilk} />
    </div>
  );
};
export default DrinkMenu;
