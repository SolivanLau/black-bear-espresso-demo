require('dotenv').config();
const nodemailer = require('nodemailer');
const { BadReqErr } = require('../errors/index');

const emailTemp = `hello! this is an email`;

// NODE MAILER

async function main(senderFirst, senderLast, email, message, subject) {
  console.log(senderLast);
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: `${senderFirst} ${senderLast ?? ''} <solivan.smtp@gmail.com>`,
    to: 'solivan_lau@hotmail.com',
    subject: subject ?? 'Black Bear Contact Form:',
    html: `Contact:${email}<br/><br/>`,
  });

  return info.messageId;
}
// SEND EMAIL CONTROLLER
const sendEmail = (req, res) => {
  const values = Object.entries(req.body);
  if (values.some(([key, value]) => value === '')) {
    const emptyValues = values
      .filter(([key, value]) => value === '')
      .map(([key, value]) => key);
    throw new BadReqErr('Please fill out all fields!', emptyValues);
  } else {
    const { firstName, lastName, email, msg } = req.body;
    const htmlMsg = msg.replace(/\n/g, '<br>');
    try {
      main(firstName, lastName, email, htmlMsg);
      res.json({ success: true, info: { ...req.body } });
    } catch (error) {
      throw new BadReqErr('Ran into an email error!', error);
    }
  }
};

// GET EMAIL CONTROLLER
const getEmail = (req, res) => {
  res.json({ msg: `grabbing all emails from database` });
};

module.exports = {
  sendEmail,
  getEmail,
};
