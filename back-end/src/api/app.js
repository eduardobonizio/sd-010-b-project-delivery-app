const express = require('express');
<<<<<<< HEAD
const { registerRoute } = require('../routes/index');
const { uniqueConstraintError } = require('../middlewares/errorMiddleware');
=======
const cors = require('cors');
const loginRoute = require('../routes/login.route');
>>>>>>> aba38e68a1c1db85482182aea4e182ae80d6ee44

const app = express();
app.use(express.json());

<<<<<<< HEAD
app.post('/register', registerRoute);
app.use(uniqueConstraintError);
=======
app.use(express.json());
app.use(cors());
app.use('/login', loginRoute);
app.get('/coffee', (_req, res) => res.status(418).send('ok'));
>>>>>>> aba38e68a1c1db85482182aea4e182ae80d6ee44

module.exports = app;
