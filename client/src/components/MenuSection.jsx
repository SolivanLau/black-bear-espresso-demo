import MenuItem from './MenuItem';
import { nanoid } from 'nanoid';
const MenuSection = ({
  navId,
  category,
  subtitle,
  items,
  espressoItems,
  needPriceGuide,
}) => {
  return (
    <>
      <article className="menuSection" id={navId}>
        <h2>
          {category}
          {subtitle && <span className="menuSectionSubtitle">{subtitle}</span>}
        </h2>
        <hr />
        <table className="menuList">
          {needPriceGuide === true && (
            <thead>
              <tr className="priceGuide">
                <th className="itemName">{category} item</th>
                <th className="price">8oz</th>
                <th className="price">12oz</th>
                <th className="price">16oz</th>
              </tr>
            </thead>
          )}
          <tbody>
            {items.map((item) => {
              const id = nanoid();
              return <MenuItem key={id} {...item} />;
            })}
          </tbody>
        </table>
        {/* {espressoItems && (
          <ul className="menuList">
            {espressoItems.map((item) => {
              const id = nanoid();
              return <MenuItem key={id} {...item} />;
            })}
          </ul>
        )}

        {needPriceGuide === true && (
          <div className="priceGuide">
            <div className="blankSpace"></div>
            <div className="prices">
              <p>8oz</p>
              <p>12oz</p>
              <p>16oz</p>
            </div>
          </div>
        )}
        <ul className="menuList">
          {items.map((item) => {
            const id = nanoid();

            return <MenuItem key={id} {...item} />;
          })}
        </ul> */}
      </article>
    </>
  );
};
export default MenuSection;
