const { StatusCodes } = require('http-status-codes');

const notFoundMiddleware = (req, res, next) => {
  return res
    .status(StatusCodes.NOT_FOUND)
    .json({ msg: `The resource you were looking for was not found.` });
};

module.exports = notFoundMiddleware;
