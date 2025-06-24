/*1. feladat: Hello végpont
📋 Cél:
IP: 127.0.0.1

Port: 3000

GET kérés a /api/hello végpontra

JSON válasz: { "message": "Helló Világ!" }

Konzolüzenet a szerver indításakor*/

// 1. Lépés: HTTP modul betöltése
const http = require('http');

// 2. Lépés: Beállítások (IP és port)
const hostname = '127.0.0.1';
const port = 3000;

// 3. Lépés: Szerver létrehozása
const server = http.createServer((req, res) => {
  // 4. Lépés: Ellenőrizzük az útvonalat és a HTTP metódust
  if (req.url === '/api/hello' && req.method === 'GET') {
    // 5. Lépés: Válaszüzenet létrehozása
    const response = {
      message: 'Helló Világ!'
    };

    // 6. Lépés: Fejléc beállítása (200 OK, JSON típus)
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // 7. Lépés: JSON visszaküldése
    res.end(JSON.stringify(response));
  } else {
    // 8. Lépés: Nem található válasz (404)
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Nem található végpont' }));
  }
});

// 9. Lépés: Szerver elindítása
server.listen(port, hostname, () => {
  console.log(`Szerver elindult: http://${hostname}:${port}`);
});
