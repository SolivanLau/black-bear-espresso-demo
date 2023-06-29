require('dot-env');
require('express-async-errors');

const express = require('express');
const app = express();

// middleware
const errHandlerMiddleware = require('./middleware/errHandler');
const notFound = require('./middleware/notFound');
app.use(errHandlerMiddleware);
app.use(notFound);
// app init
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is listening on port, ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
