console.log("Páros szám ellenőrzése")

function isEven(n) {
    return n % 2 === 0;
}
// Tesztelés
console.log(isEven(4)); // true
console.log(isEven(5)); // false
console.log("--------------------")

//Feladat: Írj egy isPositive(n) függvényt, amely visszaadja, hogy egy szám pozitív-e!
function isPositive(n) {
    return n > 0; // Igaz, ha a szám nagyobb, mint 0
}

//Feladat: Írj egy countDigits(n) függvényt, amely visszaadja, hány számjegyből áll egy egész szám!
function countDigits(n) {
    return Math.abs(n).toString().length; // Először pozitívvá tesszük a számot, majd szöveggé alakítjuk és megszámoljuk a karaktereket

}
// Tesztelés

console.log(countDigits(12345)); // 5
console.log(countDigits(-678)); // 3
console.log("--------------------")







/*5. Feladat – Tömb rendezése csökkenő sorrendbe
Írj egy sortDescending(arr) függvényt, amely visszaadja a tömböt csökkenő sorrendbe rendezve!

Példa:

sortDescending([4, 1, 7, 3]) // [7, 4, 3, 1]*/
function sortDescending(arr) {                // A tömb csökkenő sorrendbe rendezése
    return arr.sort((a, b) => b - a);         // A sort() metódus használata, amely a b - a kifejezéssel csökkenő sorrendbe rendezi az elemeket
}

// Tesztek
console.log(sortDescending([4, 1, 7, 3])); // [7, 4, 3, 1]
console.log(sortDescending([10, 0, 5]));   // [10, 5, 0]
 

//Feladat: Írj egy factorial(n) függvényt, amely kiszámolja a n! értékét.
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
console.log(factorial(-3)); // undefined
console.log("--------------------")