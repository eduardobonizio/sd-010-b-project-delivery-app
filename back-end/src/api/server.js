const port = process.env.PORT || 3001;
const app = require('./app');

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
            origin: `http://localhost:${port}`,
            methods: ['GET', 'POST'],
        },
});

app.listen(port);
console.log(`Api rodando na porta ${port}`);
