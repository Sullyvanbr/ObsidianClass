let cars = ["Saab", "BMW", "Toyota"];
let chaine = "chaine de caractères";
let nombre = "1";
let nombreVirgule = "1,1";
const ages = {bob: 27, pierre: 30};
let p = maFonction;
function maFonction() {
    console.log("Hello World");
}

let nombres = uneFonction()
function uneFonction() {
    return 0.1 + 0.2
}

let unCompteur = 0;
let b = ++unCompteur;
let c = --unCompteur;
let d = unCompteur +=10;
let e = unCompteur + 0.1;
let puissance = 2**4;

console.log(b);
console.log(c);
console.log(unCompteur);
console.log(e);
console.log(puissance);
console.log(3**4 + 5 % 3 / (3 * 8) - 4);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(10));