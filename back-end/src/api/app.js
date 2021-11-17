const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');

const drinksRouter = require('./routers/drinksRouter');

const app = express();
app.use(express.json());
app.use(cors());
app.use(drinksRouter);

app.use(errorMiddleware);

module.exports = app;
