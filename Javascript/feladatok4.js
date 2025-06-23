console.log("Két szám legkisebb közös többszöröse (LKKT)")

function lcm(a, b) {
    let max = Math.max(a, b);
    let lcm = max;
    
    while (true) {
        if (lcm % a === 0 && lcm % b === 0) {
            return lcm;
        }
        lcm++;
    }
}
// Tesztelés
console.log(lcm(4, 6)); // 12
console.log(lcm(15, 20)); // 60
console.log("--------------------")

//Feladat: Írj egy reverseString(str) függvényt, amely visszaadja a szöveget visszafelé!

function reverseString(str) {
    return str.split('').reverse().join(''); // A split() metódussal karakterekre bontjuk, majd a reverse() metódussal visszafelé rendezzük, végül a join() metódussal újra összefűzzük
}
// Tesztelés
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log("--------------------")

//Feladat: Írj egy toLower(str) függvényt, amely kisbetűsre alakítja a kapott szöveget!
function toLower(str) {
    return str.toLowerCase(); // A toLowerCase() metódussal alakítjuk kisbetűssé a szöveget
}
// Tesztelés
console.log(toLower("HELLO")); // "hello"
console.log(toLower("JavaScript")); // "javascript"
console.log("--------------------")

//Feladat: Írj egy sumArray(arr) függvényt, amely visszaadja a tömb számainak összegét!
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0); // A reduce() metódussal összeadjuk a tömb elemeit, kezdőérték 0
}
// Tesztelés
console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([-1, 5, 10])); // 14
console.log("--------------------")

//Feladat: Írj egy maxInArray(arr) függvényt, amely visszaadja a tömb legnagyobb elemét!

function maxInArray(arr) {
    return Math.max(...arr); // A Math.max() függvény használata a tömb elemeinek legnagyobb értékének meghatározására
}
// Tesztelés
console.log(maxInArray([1, 2, 3])); // 3    
console.log(maxInArray([-1, -5, -10])); // -1
console.log("--------------------")