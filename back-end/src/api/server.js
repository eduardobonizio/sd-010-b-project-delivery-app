const port = process.env.PORT || 3001;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const userRouter = require('./routers/userRouter');

app.use('/', userRouter);

app.listen(port);

console.log(`Api rodando na porta ${port}`);
