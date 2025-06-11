// 1. Páros szám ellenőrzése
// A függvény visszaadja, hogy a megadott szám páros-e (true), vagy sem (false)
function isEven(n) {
    return n % 2 === 0;
}

// Teszt
// console.log(isEven(10)); // true
// console.log(isEven(7));  // false

// 2. Számjegyek összege
// A függvény visszaadja egy egész szám számjegyeinek összegét
function digitSum(n) {
    return Math.abs(n) // negatív számok kezelése
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Teszt
// console.log(digitSum(123)); // 6
// console.log(digitSum(-456)); // 15

// 3. Palindróm szám ellenőrzése
// A függvény megadja, hogy a szám palindróm-e (visszafelé is ugyanaz-e)
function isPalindrome(n) {
    const str = n.toString();
    return str === str.split('').reverse().join('');
}

// Teszt
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false

// 4. Két szám legkisebb közös többszöröse (LKKT)
// Segédfüggvény: Legnagyobb közös osztó (LNKO)
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// LKKT meghatározása a LNKO segítségével
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// Teszt
// console.log(lcm(12, 18)); // 36
// console.log(lcm(7, 5));   // 35

// 5. Egy tömb mediánjának meghatározása
// A függvény visszaadja a tömb rendezett formájának medián értékét
function median(arr) {
    const sorted = [...arr].sort((a, b) => a - b); // tömb másolása és rendezése
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

// Teszt
// console.log(median([1, 3, 3, 6, 7, 8, 9])); // 6
// console.log(median([1, 2, 3, 4])); // 2.5
