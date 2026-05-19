function ajouterTexte(pseudo, duTexte){
    const text =  document.createElement('p')
    text.innerHTML = '<strong>' + pseudo + '</strong>' + " - " + duTexte;
    document.body.appendChild(text)
};
ajouterTexte("Daniel", "Gracia");
ajouterTexte("Jarry", "Borne");
ajouterTexte("JCVD", "OK");
ajouterTexte("Dongue", "Rodrique");