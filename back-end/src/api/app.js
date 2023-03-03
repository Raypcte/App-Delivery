const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorMiddleware');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoutes');

const app = express();

app.use(cors());

app.get('/coffee', (_req, res) => res.status(200).json('test'));

app.use(express.json());

app.use('/login', loginRouter);
app.use('/register', userRouter);
app.use('/products', productRouter);

app.use(errorHandler);

module.exports = app;
