/*
    CIT 281 Project 1
    Name: Zoe Turnbull
*/

// VARIABLES
let randStrAlph = "";
const alphArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// FUNCTIONS
function getRandomInteger(min, max) {
    // Returns a random number between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i <= getRandomInteger(5, 26); i++) {
    getRand = getRandomInteger(0, 24);
    randStrAlph = randStrAlph + alphArray[getRand];
}

console.log(randStrAlph);