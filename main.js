// 1
let exercice = document.querySelector('h2').innerText;
console.log(exercice);

// 2
exercice = document.querySelector('h2').innerText = 'Exercice 1';
console.log(exercice);

// 3
let rajoute = document.querySelector('p').innerText = "document.querySelector('h2').innerText = 'Exercice 1'";
console.log(rajoute);

// 4
let sect1 = document.querySelectorAll('section')[0];
let nomId = sect1.id
console.log(nomId);

// let exo4 = document.querySelector('#users').id

// let exo4bis = document.querySelectorAll('section')[0]
// console.log(exo4bis.getAttribute('id'));
// console.log(exo4);

// 5
let premTitre = document.querySelectorAll('h1')[0];
let nomClass = premTitre.className
console.log(nomClass);

// let exo5 = document.querySelectorAll('h1')[0]
// console.log(exo5.classList);
// console.log(exo5.className);
// console.log(exo5.getAttribute('class'));

// 6
let nomh1 = document.querySelectorAll('h1');
let nomClass1 = nomh1.className;
let nomClassF = Array.from(nomh1);
console.log(nomClassF);

nomClassF.forEach(element => {
    console.log(element.className);
});

// 7
let inp = document.querySelector('input');
console.log(inp.attributes);

// 8
let attributs = inp.getAttribute("type");
console.log(attributs);

// 9
let inp2 = document.querySelector('#inputPassword3');
console.log(inp2);
let attributs2 = inp2.setAttribute('type', 'password');
console.log(attributs2);

// 10
let premierInp = document.querySelectorAll('input')[0];
console.log(premierInp);
let attrib = premierInp.removeAttribute('type');
console.log(attrib);
let attributs3 = premierInp.setAttribute('color', 'email');
console.log(attributs3);

// let exo10 = document.querySelectorAll('input')[0]
// exo10.setAttribute('type', 'color')


