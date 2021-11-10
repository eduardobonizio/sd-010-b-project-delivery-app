const express = require('express');
const path = require('path')

const app = express();

/**SOURCE https://www.ti-enxame.com/pt/javascript/como-voltar-1-nivel-de-pasta-com-dirname/1052924164/ */
app.use('/images', express.static(path.join(__dirname, '../../../', './back-end/public')));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
