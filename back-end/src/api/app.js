const express = require('express');
const errorHandler = require('./middleware/errorMiddleware');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.json())

app.use('/login', loginRouter);
app.use('/register', userRouter);

app.use(errorHandler);

module.exports = app;
