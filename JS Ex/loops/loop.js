const lesTxt = document.getElementsByTagName("p");
console.log(lesTxt)

const textesTab = Array.from(lesTxt);
console.log(textesTab);

textesTab.map((a) => a.innerHTML = 'nouveau')