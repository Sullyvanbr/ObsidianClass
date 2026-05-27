const deuxieme = document.querySelector('h2');
deuxieme.style.display = 'none';

const titre = document.querySelector('h2');
document.addEventListener('mouseleave',()=>{
    titre.style.display = 'block';
})

document.addEventListener('mouseover', () =>{
    titre.style.display = 'none';
})

const tape = document.getElementById('renderKeyboard');
const texte = document.getElementById('input-exercice-keyup');
texte.addEventListener('keyup', () =>{
    tape.innerText = texte.value
});

const five = document.querySelector('textarea');
const limit = document.querySelector('button');
// five.addEventListener('keyup', () =>{
//     if(five.value.length >= 5){
//     limit.disabled = true;
//     }
//     else{
//         limit.disabled = false;
//     }
// });
five.addEventListener('keyup', () =>{
five.value.length >= 5 ? (limit.disabled = true) : (limit.disabled = false);
});

const time = document.querySelector('html');
setTimeout(() => {
    time.style.background = "blue";
    clearTimeout(time, 5000);
}, 3000);

document.addEventListener('keyup', () => {
    localStorage.setItem(five.value)
})
console.log(localStorage)