console.log("-	Egy tömb mediánjának meghatározása")

function median(arr) {
   

    const sorted = arr.slice().sort((a, b) => a - b); // növekvő sorrend
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 1) {
        return sorted[mid]; // páratlan elemszám esetén a középső
    } else {
        return (sorted[mid - 1] + sorted[mid]) / 2; // párosnál két középső átlaga
    }
}
// Tesztelés
console.log(median([1, 3, 2])); // 2    
console.log(median([1, 3, 2, 4])); // 2.5
console.log(median([1, 3, 3, 6, 7, 8, 9]) ); // 6
console.log("--------------------")

//Feladat: Írj egy isPrime(n) függvényt, amely visszaadja, hogy a szám prím-e (csak 1-gyel és önmagával osztható)!
function isPrime(n) {
    if (n <= 1) return false; // 0 és 1 nem prím
    for (let i = 2; i <= Math.sqrt(n); i++) { // csak a gyökéig kell ellenőrizni
        if (n % i === 0) return false; // ha osztható, akkor nem prím
    }
    return true; // ha nem találtunk osztót, akkor prím
}
// Tesztelés
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log("--------------------")

//Feladat: Írj egy fibonacci(n) függvényt, amely visszaadja az n-edik Fibonacci számot.
function fibonacci(n) {
    if (n < 0) return undefined; // negatív index esetén undefined
    if (n === 0) return 0; // 0. Fibonacci szám
    if (n === 1) return 1; // 1. Fibonacci szám

    let a = 0, b = 1; // kezdőértékek
    for (let i = 2; i <= n; i++) {
        const temp = a + b; // következő Fibonacci szám
        a = b; // előző érték frissítése
        b = temp; // új érték frissítése
    }
    return b; // visszatérünk az n-edik Fibonacci számmal
}
// Tesztelés
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log("--------------------")


//Feladat: Írj egy stringLength(str) függvényt, amely visszaadja a szöveg hosszát!
function stringLength(str) {
    return str.length; // A length tulajdonság visszaadja a szöveg hosszát
}
// Tesztelés
console.log(stringLength("hello")); // 5
console.log(stringLength("JavaScript")); // 10
console.log(stringLength("")); // 0
console.log("--------------------")

//Feladat: Írj egy capitalize(str) függvényt, amely a szöveg első betűjét nagybetűssé teszi!
function capitalize(str) {
    if (str.length === 0) return str; // üres szöveg esetén visszatérünk az üres szöveggel
    return str.charAt(0).toUpperCase() + str.slice(1); // az első betű nagybetűs, a többi változatlan
}
// Tesztelés
console.log(capitalize("hello")); // "Hello"
console.log(capitalize("javaScript")); // "JavaScript"  
console.log(capitalize("")); // ""
console.log("--------------------")