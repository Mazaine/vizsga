//1. Feladat – Számjegyek átlagának kiszámítása
//Írj egy digitAverage(n) függvényt, amely egy szám számjegyeinek átlagát adja vissza!
function digitAverage(n) {
    let digits = n.toString(); // pl. "1234"   
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]); // számjegy hozzáadása
    }
    return sum / digits.length; // átlag kiszámítása
}

// Tesztek//Példa:digitAverage(1234)
console.log(digitAverage(1234)); // 2.5   
console.log(digitAverage(999));  // 9
console.log("--------------------")



/*2. Feladat – Maximum érték megtalálása tömbben
Írj egy maxValue(arr) függvényt, amely visszaadja egy tömb legnagyobb elemét!

Példa:
maxValue([1, 7, 3, 9, 2]) // 9*/

function maxValue(arr) {
    let max = arr[0];                          // Kezdőérték a tömb első eleme
    
    for (let i = 1; i < arr.length; i++) {    // Végigiterálunk a tömbön
        if (arr[i] > max) {             // Ha az aktuális elem nagyobb, mint a jelenlegi max
            max = arr[i];            // Akkor frissítjük a max értéket
        }
    }
    return max;
}

// Tesztek
console.log(maxValue([1, 7, 3, 9, 2])); // 9
console.log(maxValue([-5, -2, -9]));    // -2
console.log("--------------------")
/*3. Feladat – Tömb elemeinek összegzése
Írj egy sumArray(arr) függvényt, amely visszaadja egy tömb összes elemének összegét!

Példa:

sumArray([2, 5, 8]) // 15*/
function sumArray(arr) {          // A tömb elemeinek összegzésére szolgáló függvény
    let sum = 0;                 // Kezdőérték 0
    for (let num of arr) {        // Végigiterálunk a tömb elemein
        sum += num;         // Minden elem hozzáadása az összeghez
    }
    return sum;
}

// Tesztek
console.log(sumArray([2, 5, 8])); // 15
console.log(sumArray([10, -3, 7])); // 14
console.log("--------------------")


console.log("-	Számjegyek összege")

function digitSum(n) {
    return Math.abs(n)  //Math.abs(n) → negatív számokat pozitívvá tesz, mert -123 is 1+2+3. 
        .toString()  //.toString() → számot szöveggé alakít (pl. 123 → "123").
        .split('')   //.split('') → karakterek tömbjévé bontja (["1", "2", "3"]).
        .reduce((sum, digit) => sum + Number(digit), 0); //.reduce(...) → végigmegy a tömbön, és összeadja a számjegyeket.
}

/*function digitSum(n) {
    return n
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
} */


// Tesztelés
console.log(digitSum(123)); // 6 
console.log(digitSum(-456)); // 15   
console.log("--------------------")
/*4. Feladat – Számok számossága egy tömbben
Írj egy countNumbers(arr, n) függvényt, amely megszámolja, hogy az n szám hányszor szerepel a tömbben!

Példa:

countNumbers([1, 2, 3, 2, 4, 2], 2) // 3*/
function countNumbers(arr, n) {    // A tömbben szereplő n szám előfordulásának megszámlálása
    let count = 0;             // Kezdőérték 0
    
    for (let num of arr) {     // Végigiterálunk a tömb elemein
        if (num === n) {     // Ha az aktuális elem megegyezik n-nel
            count++;      // Akkor növeljük a számlálót
        }
    }
    return count;
}

// Tesztek
console.log(countNumbers([1, 2, 3, 2, 4, 2], 2)); // 3
console.log(countNumbers([5, 5, 5, 5], 5));       // 4
console.log("--------------------")

