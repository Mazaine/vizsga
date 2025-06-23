console.log("-	Palindróm szám ellenőrzése")

function isPalindrome(n) {
    const str = n.toString(); //toString() → számot szöveggé alakít.
    return str === str.split('') //split('') → karakterek tömbjévé alakít.
    .reverse() //reverse() → a tömb elemeit megfordítja.
    .join(''); //join('') → a tömb elemeit visszaalakítja szöveggé.
}
// Tesztelés
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-122)); // false
console.log("--------------------")

//Feladat: Írj egy factorial(n) függvényt, amely visszaadja n! értékét (pl. 5! = 5×4×3×2×1 = 120).

function factorial(n) {
    if (n < 0) return undefined; // Negatív számok esetén undefined
    if (n === 0 || n === 1) return 1; // 0! és 1! értéke 1

    let result = 1; // Kezdőérték
    for (let i = 2; i <= n; i++) { // 2-től n-ig szorzunk
        result *= i;
    }
    return result;
}
// Tesztelés
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log("-------------"); 

//Feladat: Írj egy filterEvens(arr) függvényt, amely visszaadja a tömbből csak a páros számokat.

function filterEvens(arr) {
    return arr.filter(num => num % 2 === 0); // filter() → csak a páros számokat tartja meg
}
// Tesztelés
console.log(filterEvens([1, 2, 3, 4, 5])); // [2, 4]
console.log(filterEvens([10, 15, 20, 25])); // [10, 20]
console.log("--------------------");

//Feladat: Írj egy wordCount(text) függvényt, amely visszaadja, hány szó van egy adott szövegben.
function wordCount(text) {
    return text.trim().split(/\s+/).length; // trim() → eltávolítja a felesleges szóközöket, split(/\s+/) → szavakra bontja a szöveget
}
// Tesztelés
console.log(wordCount("Hello world!")); // 2
console.log(wordCount("  This is a test.  ")); // 4

console.log("--------------------");

//Feladat: Írj egy reverseNumber(n) függvényt, amely visszaadja a szám számjegyeit megfordítva.
function reverseNumber(n) {
    return parseInt(n.toString().split('').reverse().join(''), 10); // toString() → szöveggé alakít, split('') → karakterekre bont, reverse() → megfordítja, join('') → visszaalakít szöveggé, parseInt() → számra konvertál
}   
// Tesztelés
console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(-6789)); // -9876
console.log("--------------------");