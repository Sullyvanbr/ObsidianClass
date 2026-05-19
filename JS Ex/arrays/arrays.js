let nom = "Baldur";
let age = "30 ans";
let passions = ["sport", "manger"];
let tabUser = [nom, age, passions];
console.log(tabUser);
console.log(tabUser[2]);
console.log(tabUser[2][1]);

//Ajouter des éléments
let testTabAjout = ["10", "10", "10"];
console.log(testTabAjout);
testTabAjout.push('Cortex', 92, 'Les pyaramides');
console.log(testTabAjout);

//Supprimer le dernier élément
let testTabSuppression = ["10", "12", "10"];
console.log(testTabSuppression);
testTabSuppression.pop();
console.log(testTabSuppression);
// shift pour supp le premier et unshift à voir mais surement pour ajouter des nouveaux éléments au début

const nombres = [1, 2, 3];
const doubles = nombres.map(nombre => nombre * 2);
console.log(doubles);
 //Résultat: [2, 4, 6]. .map parcours le tableau et applique la fonction à chacun

const ages = [12, 18, 25, 6];
const majeur = ages.filter(age => age <= 18);
console.log(majeur);
//Affiche seulement ce que l'on souhaite

const prix = [10, 20 ,30];
const total = prix.reduce((acc, current) => acc + current, 0);
console.log(total);

function additionner(nombre = 15){
    console.log(33 + nombre);
}
additionner(2)// à revoir !!!

function addition2(a = 0, b = 0){
    console.log(a + b);
}
addition2(2, 3)

function addition(a, b){
	return a + b;
}
const resultat = addition(10, 33);
console.log(resultat);

//version fléchée
const additionFleche = (a=0, b=0) =>{
    return
}

//TODO : Pourquoi ca beug ?
function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
//Affichage: 9
// console.log(wtf); ligne fausse
//Le problème vient de la dernière ligne, tu appelles une variable qui est définie dans une fonction en dehors de la fonction.