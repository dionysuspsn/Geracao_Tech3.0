const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log(`Método recebido: ${req.method}`);
  console.log(`URL acessada: ${req.url}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor Node.js processou sua requisição!');
});

server.listen(3000, () => console.log('Servidor online na porta 3000'));