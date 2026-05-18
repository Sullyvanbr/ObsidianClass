let notesTibo = [0, 3, 4, 6, 18, 19, 4];
function calculerMoyenne(tableauNotes){
    let somme = 0;
    for(let i = 0; i < tableauNotes.length; i ++){
        somme = somme + tableauNotes[i];
    }
    let moyenne = somme / tableauNotes.length;
    return moyenne
}
console.log("La moyenne des notes de Tibo est: " + calculerMoyenne(notesTibo))