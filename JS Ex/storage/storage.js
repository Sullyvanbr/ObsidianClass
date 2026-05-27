const monTxt = document.querySelector('#note-textarea');
const renderZone = document.querySelector('.textRender');
const monSuperTexte = localStorage.getItem('monSuperTexte');

monTxt.value = monSuperTexte;

renderZone.innerText = monTxt.value
// if(monTxt.value.length > 0){
//     renderZone.innerText = monTxt.value;
// };

monTxt.addEventListener('keyup', () => {
    localStorage.setItem('monSuperTexte', monTxt.value);
    renderZone.innerText = monTxt.value;
});
console.log(localStorage);