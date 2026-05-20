function ajouterTexte(pseudo, duTexte){
    const text =  document.createElement('p')
    text.innerHTML = '<strong>' + pseudo + '</strong>' + " - " + duTexte;
    //text.innerHTML = `<strong>${pseudo}</strong> - ${duTexte}`;
    document.body.appendChild(text)
};
ajouterTexte("Daniel", "Gracia");
ajouterTexte("Jarry", "Borne");
ajouterTexte("JCVD", "OK");
ajouterTexte("Dongue", "Rodrique");

// Event click
// let Bouton = document.querySelector('H1');

// Bouton.addEventListener('click',()=>{
//     Bouton.innerText = "ça clique"
// })

// Test du toggle
// let bouton = document.querySelector('H1');
// bouton.addEventListener("toggle", (event) => {
//     bouton.innerText = "ça clique"
// })

// ontoggle = (event) => {
//     bouton.innerText = "D.O.M Event"
// }


// On selectionne le titre
const mainTitle = document.querySelector('h1');
let isClicked = false;
// console.log(mainTitle);
// On place l'écouteur d'events


mainTitle.addEventListener('click',()=>{
    console.log('Ok le titre est clickable');
    // ON modifie le innerText de ce meme titre
    // mainTitle.innerText = '😄';
    mainTitle.innerText = isClicked  ? '😄' : 'Hello World'
    isClicked = !isClicked;
});

const ajouter = document.getElementsByName('ajout')[0];
ajouter.addEventListener('click', ()=>{
    mainTitle.classList.add('class');
})

const enlever = document.getElementsByName('super')[0];
enlever.addEventListener('click', ()=>{
    mainTitle.classList.remove('class');
})
const changer = document.getElementsByName('change')[0];
changer.addEventListener('click', ()=>{
    mainTitle.classList.toggle('class');
})