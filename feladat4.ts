// 1. Két szám közötti véletlenszám generálása
// A függvény visszaad egy véletlenszámot a megadott minimum és maximum között (mindkettő beleértve)
function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Teszt
// console.log(randomBetween(1, 10)); // lehet pl. 3, 7, 10, stb.

// 2. Szöveg megfordítása
// A függvény visszaadja a szöveg karaktereit fordított sorrendben
function reverseString(text: string): string {
  return text.split('').reverse().join('');
}

// Teszt
// console.log(reverseString("TypeScript")); // "tpircSepyT"

// 3. Tömb legnagyobb elemének visszaadása
// A függvény visszaadja a tömb legnagyobb elemét
function maxElement(arr: number[]): number {
  return Math.max(...arr);
}

// Teszt
// console.log(maxElement([3, 1, 7, 4])); // 7
