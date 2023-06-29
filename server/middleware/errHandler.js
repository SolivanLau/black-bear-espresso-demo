const { CustomApiErr } = require('../errors/index');
const { StatusCodes } = require('http-status-codes');
const errHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiErr) {
    return res.status(err.statusCode).json({ msg: err.message });
  } else {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `We ran into a server error! please try again later.` });
  }
};

module.exports = errHandlerMiddleware;
