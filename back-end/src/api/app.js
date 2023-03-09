const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorMiddleware');
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoutes');
const salesRouter = require('./routes/salesRouter');
const adminRouter = require('./routes/adminRoute');

const app = express();

app.use(cors());

app.use(express.json());
app.use('/images', express.static('public'));

app.use('/login', loginRouter);
app.use('/register', userRouter);
app.use('/products', productRouter);
app.use('/sales', salesRouter);
app.use('/admin', adminRouter);

app.use(errorHandler);

module.exports = app;
