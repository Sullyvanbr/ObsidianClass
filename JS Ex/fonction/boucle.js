let notesTibo = [0, 3, 4, 6, 18, 19, 4];
function calculerMoyenne(tableauNotes){
    let somme = 0;
    let moyenne = 0;
    for(let i = 0; i < tableauNotes.length; i ++){
        somme += tableauNotes[i];
        moyenne = somme / tableauNotes.length;
    }
    if(moyenne >= 15){
        return [moyenne, 'très bien'];
    }
    else if(moyenne >= 10){
        return [moyenne, 'assez Bien'];
    }
    else{
        return [moyenne, 'refus'];
    }
}
console.log(calculerMoyenne(notesTibo))

