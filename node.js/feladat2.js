/*2. feladat: Dátum végpont
📋 Cél:
IP: 127.0.0.1

Port: 3001

GET kérés a /api/date végpontra

JSON válasz: pl.
{ "date": "2025-06-23", "time": "14:25:12" }

Konzolüzenet: "Szerver fut: http://127.0.0.1:3001"*/

// A http modult betöltjük, amivel szervert tudunk létrehozni
const http = require('http');

// A szerver IP-címe (localhost) és portja (3001)
const hostname = '127.0.0.1';
const port = 3001;

// Szerver létrehozása a http.createServer függvénnyel
const server = http.createServer((req, res) => {
  // Ha a kliens a /api/date végpontra küld GET kérést...
  if (req.url === '/api/date' && req.method === 'GET') {
    // Létrehozzuk a mostani dátum-idő objektumot
    const now = new Date();

    // Dátumot és időt külön mezőben tároljuk, egyszerű formában
    const response = {
      date: now.toISOString().split('T')[0],    // pl.: "2025-06-23"
      time: now.toTimeString().split(' ')[0]    // pl.: "14:25:12"
    };

    // Állítsuk be a válasz fejléceit (HTTP státusz és tartalomtípus)
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // A válaszüzenet legyen JSON formátumú
    res.end(JSON.stringify(response));
  } else {
    // Ha nem a megfelelő végpontot kérik le, adjunk vissza 404 hibát
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Nem található végpont' }));
  }
});

// Indítsuk el a szervert a megadott IP-n és porton
server.listen(port, hostname, () => {
  console.log(`Szerver fut: http://${hostname}:${port}`);
});
