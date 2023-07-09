require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const errHandlerMiddleware = require('./middleware/errHandler');
const notFoundMiddleware = require('./middleware/notFound');

const emailRouter = require('./routes/email');
// general middleware
app.use(cors({ options: 'http://localhost:5173' }));
app.use(express.json());

// router
app.use('/api/v1/', emailRouter);

// custom middleware
app.use(errHandlerMiddleware);
app.use(notFoundMiddleware);
const port = process.env.PORT || 3000;
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
