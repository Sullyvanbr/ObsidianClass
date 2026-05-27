const time = document.querySelector('h2');
const bouton = document.querySelector('button');
let temps = 3;
bouton.addEventListener('click', () => {
    time.innerText = temps;
    const go = setInterval(() => {
        temps-- ;
        if (temps > 0){
            time.innerText = temps;
        }
        else if (temps === 0){
            time.innerText = 'GO !';
            clearInterval(go)
        }
    }, 1000);
});