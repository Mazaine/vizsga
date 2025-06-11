// 6. Feladat – NodeJS szerver
// A szerver az alábbi beállításokkal fusson:
// - IP-cím: 127.0.0.1
// - Port: 4000
// - A /api/status végponton a következő JSON választ kell visszaadnia:
//   { "status": "OK", "message": "A szerver megfelelően működik" }
// - A státuszkód legyen 200
// - A szerver indulásakor írja ki a konzolra:
//   "A szerver fut a http://127.0.0.1:4000 címen"

const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/status' && req.method === 'GET') {
    const responseData = {
      status: 'OK',
      message: 'A szerver megfelelően működik'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Nem található' }));
  }
});

server.listen(port, hostname, () => {
  console.log(`A szerver fut a http://${hostname}:${port} címen`);
});
