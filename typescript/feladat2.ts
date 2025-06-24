// A függvény neve: reverseString
// Cél: a megadott szöveg karaktereit megfordítani
// Paraméter:
// - text: egy string típusú bemenet
// Visszatérési érték: egy string, amely a bemenet fordítottja

function reverseString(text: string): string {
  // A stringet először karaktertömbbé alakítjuk a split('') segítségével
  // Ezután megfordítjuk a karaktereket a reverse() metódussal
  // Végül visszaalakítjuk stringgé a join('') segítségével
  return text.split('').reverse().join('');
}

// Példa használat
console.log(reverseString("hello")); // "olleh" 
console.log(reverseString("TypeScript")); // "tpircSepyT"
console.log("------------------");




// Egy függvény, ami visszaadja, hogy a szám pozitív, negatív vagy nulla
function signOf(n: number): string {
  if (n > 0) {
    return "pozitív";   // ha a szám nagyobb, mint 0
  } else if (n < 0) {
    return "negatív";   // ha kisebb, mint 0
  } else {
    return "nulla";     // ha pontosan 0
  }
}

// Példák a használatra:
console.log(signOf(12));   // → "pozitív"
console.log(signOf(-7));   // → "negatív"
console.log(signOf(0));    // → "nulla"
console.log("------------------");



// Egy függvény, amely visszaadja egy szöveg hosszát
function getLength(text: string): number {
  // A string beépített length tulajdonságát használjuk
  return text.length;
}

// Példák:
console.log(getLength("TypeScript"));  // → 10
console.log(getLength(""));            // → 0
console.log("------------------");





