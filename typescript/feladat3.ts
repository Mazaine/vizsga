// A függvény neve: maxElement
// Cél: visszaadni a tömb legnagyobb értékét
// Paraméter:
// - arr: egy number[] típusú tömb
// Visszatérési érték: egy number, a tömb legnagyobb eleme

function maxElement(arr: number[]): number {
  // Ellenőrizzük, hogy a tömb ne legyen üres
  if (arr.length === 0) {
    throw new Error("A tömb nem lehet üres.");
  }

  // Math.max csak külön paraméterként működik, ezért használjuk a spread operátort (...)
  return Math.max(...arr);
}

// Példák a használatra:
console.log(maxElement([1, 2, 3, 4])); // → 
// 4
console.log(maxElement([-1, -2, -3, -4])); // →     
// -1
console.log("------------------");




// Egy függvény, ami megszámolja, hány szó van egy mondatban
function countWords(text: string): number {
  // Először eltávolítjuk az elején/végén lévő szóközöket
  const trimmed = text.trim();

  // Ha az így megtisztított szöveg üres, nincs benne szó
  if (trimmed === "") {
    return 0;
  }

  // Szétválasztjuk a szöveget szóközöknél (több szóközt is kezel)
  const words = trimmed.split(/\s+/); // regex: egy vagy több whitespace karakter

  // A szavak számát visszaadjuk
  return words.length;
}

// Példák a használatra:
console.log(countWords("TypeScript nagyon jó nyelv"));  // → 4
console.log(countWords("   három szó van   "));         // → 3
console.log(countWords("     "));                       // → 0
console.log("------------------");



// Egy függvény, amely megmondja, hogy az első szám többszöröse-e a másodiknak
function isMultiple(a: number, b: number): boolean {
  // 0-val osztani nem lehet, ezért ezt külön kezeljük
  if (b === 0) {
    throw new Error("0-val nem lehet osztani!");
  }

  // Ha a maradék 0, akkor a b osztója az a-nak, tehát többszöröse
  return a % b === 0;
}

// Példák:
console.log(isMultiple(10, 2));   // → true
console.log(isMultiple(10, 3));   // → false
console.log(isMultiple(0, 5));    // → true (mert 0 minden szám többszöröse)
