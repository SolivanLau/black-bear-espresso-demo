// libraries
// data
import { contactData } from '../data/contentData';
import { locationData, socialData } from '../data/contactData';
// components
import MetaData from '../components/MetaData';
import SectionHeader from '../components/SectionHeader';
import HoursDisplay from '../components/HoursDisplay';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact = () => {
  return (
    <>
      <MetaData title="Contact Us" />
      <section id="contentTop" className="contact">
        <SectionHeader {...contactData} />

        <div className="wrapper">
          <article className="contactInfo">
            <div className="infoContainer">
              {/* location info */}
              <div className="visitInfo">
                <h3>Visit us</h3>
                <ul>
                  <li>{locationData.addressStreet}</li>
                  <li>{locationData.addressRegion}</li>
                  <li>Phone: {socialData.phone}</li>
                  <li>Email: {socialData.email}</li>
                </ul>
              </div>
              {/* hours info */}
              <div className="hoursInfo">
                <h3>Hours of Operation</h3>
                <HoursDisplay
                  listClass={'footerHrsList'}
                  itemClass={'footerHrsItem'}
                />
              </div>
            </div>
            {/* Google Map */}
            <Map />
          </article>
          <ContactForm />
        </div>
      </section>
    </>
  );
};
export default Contact;
