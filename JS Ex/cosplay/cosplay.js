//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};
const profil = document.querySelector('.userProfile');

const image = document.createElement('img');
image.src = userData.img;
image.alt = 'Cosplay';
profil.append(image);

const name = document.createElement('H1');
name.innerText = userData.name;
profil.append(name);

const email = document.createElement('p');
email.innerText = userData.email;
profil.append(email);

const age = document.createElement('p');
age.innerText = userData.age;
profil.append(age);

const dob = document.createElement('p');
dob.innerText = userData.dob;
profil.append(dob);

const active = document.createElement('p');
profil.append(active);
active.innerText = (userData.active === true) ? "Online" : "Offline";

profil.style.backgroundImage = "linear-gradient(45deg, rgb(65, 89, 208) 0%, rgb(200, 79, 192) 50%, rgb(255, 205, 112) 100%)";
image.style.width = "400px"
profil.style.padding = "20px"
profil.style.width = "400px";
profil.style.color = "white";
image.style.display = "block";
image.style.margin = "auto";
profil.style.margin = "auto";
console.log(image.style.margin)