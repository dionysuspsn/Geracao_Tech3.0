const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end('Página Inicial');
  } else if (url === '/produtos') {
    res.statusCode = 200;
    res.end('Lista de Produtos');
  } else {
    res.statusCode = 404;
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => console.log('Rodando com Nodemon!'));