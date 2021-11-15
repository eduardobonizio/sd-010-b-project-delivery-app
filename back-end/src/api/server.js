// eslint-disable-next-line import/order
const app = require('./app');

const PORT = process.env.PORT || 3001;

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  } });

require('./socket/status')(io);

http.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});