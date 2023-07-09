const { StatusCodes } = require('http-status-codes');
const CustomApiErr = require('./customErr');

class BadReqErr extends CustomApiErr {
  constructor(message, info) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.info = info;
  }
}

module.exports = BadReqErr;
