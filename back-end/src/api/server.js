const http = require('./app');

const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});