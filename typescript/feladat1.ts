// A függvény neve: randomBetween
// Paraméterek:
// - min: alsó határ (beleértve)
// - max: felső határ (beleértve)
// Visszatérési érték: egy véletlenszám (egész), amely a [min, max] tartományba esik

function randomBetween(min: number, max: number): number {
  // Ellenőrizzük, hogy a minimum ne legyen nagyobb, mint a maximum
  if (min > max) {
    throw new Error("A 'min' nem lehet nagyobb, mint a 'max'");
  }

  // Math.random() → [0, 1) közötti szám
  // Szorzással átméretezzük a tartományt, majd hozzáadjuk a minimum értéket
  // Math.floor → egész számra kerekítjük
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Példa használat
console.log(randomBetween(1, 10)); // Véletlenszerű szám 1-től 10-ig
console.log(randomBetween(5, 15)); // Véletlenszerű szám 5-től 15-ig

console.log("------------------");





// Egy függvény, ami visszaadja a tömb elemeinek átlagát
function average(arr: number[]): number {
  // Ha a tömb üres, hibát dobunk
  if (arr.length === 0) {
    throw new Error("A tömb nem lehet üres.");
  }

  // A reduce() segítségével összeadjuk a számokat
  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  // Az összeget elosztjuk az elemszámmal, így megkapjuk az átlagot
  return sum / arr.length;
}

// Példák a használatra:
console.log(average([2, 4, 6, 8]));  // → 5
console.log(average([10, 0]));      // → 5
console.log("--------------------------"); 


// Egy függvény, ami kiszámítja a megadott szám faktoriálisát
function factorial(n: number): number {
  // A faktoriális csak nemnegatív egész számokra értelmezett
  if (n < 0) {
    throw new Error("A faktoriális nem értelmezhető negatív számokra.");
  }

  // 0! értéke 1, ez a rekurzió alapja
  if (n === 0) {
    return 1;
  }

  // Rekurzív meghívás: pl. 5! = 5 * 4!
  return n * factorial(n - 1);
}

// Példák a használatra:
console.log(factorial(5));  // → 120
console.log(factorial(0));  // → 1
