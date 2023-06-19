// libraries
// data
import { homeData } from '../data/contentData';
// components
import SectionHeader from '../components/SectionHeader';

const Home = () => {
  return (
    <>
      <section id="contentTop">
        <SectionHeader {...homeData} />
      </section>
    </>
  );
};
export default Home;
