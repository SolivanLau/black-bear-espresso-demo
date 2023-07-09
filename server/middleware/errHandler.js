const { CustomApiErr } = require('../errors/index');
const { StatusCodes } = require('http-status-codes');
const errHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiErr) {
    return res.status(err.statusCode).json({
      success: false,
      msg: err.message,
      info: err.info,
    });
  } else {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: `We ran into a server error! Please try again later.` });
  }
};

module.exports = errHandlerMiddleware;
