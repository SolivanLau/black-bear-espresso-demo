// libraries
//data
import { menuData } from '../data/contentData';
// Components
import MetaData from '../components/MetaData';
import SectionHeader from '../components/SectionHeader';

const Menu = () => {
  return (
    <>
      <MetaData title={'Menu'} />
      <section>
        <SectionHeader {...menuData} />
      </section>
    </>
  );
};
export default Menu;
