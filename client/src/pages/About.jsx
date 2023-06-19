// data
import { aboutData } from '../data/contentData';
// components
import MetaData from '../components/MetaData';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  return (
    <>
      <MetaData title={'About Us'} />
      <section id="contentTop">
        <SectionHeader {...aboutData} />
      </section>
    </>
  );
};
export default About;
