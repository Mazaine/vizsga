/*-	A szerver az alábbi beállításokkal fusson:
o	IP-cím: 127.0.0.1
o	Port: 4000
-	A szerver válasza:
o	A /api/status végponton a következő JSON választ kell visszaadnia:
	{ "status": "OK", "message": "A szerver megfelelően működik" }
o	A státuszkód legyen 200.
-	Konzol üzenet:
o	Amikor a szerver elindul, írja ki:
	"A szerver fut a http://127.0.0.1:4000 címen"
*/

// Betöltjük a Node.js beépített http modulját, ami lehetővé teszi szerver készítését
const http = require('http');

// Beállítjuk az IP-címet és a portot, ahol a szerver futni fog
const hostname = '127.0.0.1'; // Ez a localhost (helyi gép)
const port = 4000;            // A kívánt portszám

// Létrehozzuk a szervert
const server = http.createServer((req, res) => {
  // Ellenőrizzük, hogy a kérés a /api/status végpontra érkezett-e, és GET típusú-e
  if (req.url === '/api/status' && req.method === 'GET') {
    // Elkészítjük a válaszban visszaadandó JSON objektumot
    const responseData = {
      status: 'OK',
      message: 'A szerver megfelelően működik'
    };

    // Beállítjuk a válasz státuszkódját 200-ra és a válasz típusát JSON-re
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // A válasz tartalmát JSON formátumban küldjük vissza
    res.end(JSON.stringify(responseData));
  } else {
    // Minden más végpontra 404-es hibát adunk vissza (nem található)
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Nem található' }));
  }
});

// A szerver indítása: hallgat a megadott IP-címen és porton
server.listen(port, hostname, () => {
  // Amikor elindult a szerver, írjunk üzenetet a konzolra
  console.log(`A szerver fut a http://${hostname}:${port} címen`);
});
