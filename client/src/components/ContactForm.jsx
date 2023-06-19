import { useState } from 'react';

const ContactForm = () => {
  const [contactMsg, setContactMsg] = useState({
    firstName: '',
    lastName: '',
    email: '',
    msg: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactMsg);
    // send to server
  };

  const handleChange = (e) => {
    setContactMsg({ ...contactMsg, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactFormContainer">
      <form action="#" className="contactForm" onSubmit={handleSubmit}>
        <h4>Let's have a Coffee Chat</h4>
        {/* NAME INPUTS */}
        <div className="nameInputs">
          {/* FIRST NAME */}
          <div className="inputContainer">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={contactMsg.firstName}
              onChange={handleChange}
            />
          </div>
          {/* LAST NAME */}
          <div className="inputContainer">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={contactMsg.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* EMAIL INPUT */}
        <div className="inputContainer formRow">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={contactMsg.email}
            onChange={handleChange}
          />
        </div>
        {/* MSG  INPUT */}
        <div className="inputContainer formRow">
          <label htmlFor="msg">Message</label>
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="10"
            value={contactMsg.msg}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactForm;
