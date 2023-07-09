const express = require('express');
const router = express.Router();
const { sendEmail, getEmail } = require('../controllers/email');

router.route('/email').get(getEmail).post(sendEmail);
module.exports = router;
