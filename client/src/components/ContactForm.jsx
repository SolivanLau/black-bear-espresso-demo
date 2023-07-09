import { useState } from 'react';

const ContactForm = () => {
  const [contactMsg, setContactMsg] = useState({
    firstName: '',
    lastName: '',
    email: '',
    msg: '',
  });
  const sendEmail = async (info) => {
    // server url
    const serverURI =
      import.meta.env.VITE_SERVER_URI || 'http://localhost:3000/api/v1/email';

    // sending req.body via fetch api
    const response = await fetch(serverURI, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    const data = await response.json();
    console.log(data);
  };

  const testCall = async () => {
    const res = await fetch('http://localhost:3000/api/v1/email');
    const data = await res.json();
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contactMsg);
    // send to server
    sendEmail(contactMsg);
    // testCall();
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
