const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorMiddleware');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoutes');

const app = express();

const static = express.static('../../../../assets/images.zip');

app.use(cors());

app.use(express.json());
app.use('/images', express.static('public'));

app.use('/image', static);
app.use('/login', loginRouter);
app.use('/register', userRouter);
app.use('/products', productRouter);

app.use((err, req, res, next) => errorHandler(err, req, res, next));

module.exports = app;
