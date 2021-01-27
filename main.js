// 1
let exercice = document.querySelector('h2').textContent;
console.log(exercice);

// 2
exercice = document.querySelector('h2').innerHTML = 'Exercice 1';
console.log(exercice);

// 3
let rajoute = document.querySelector('p').innerHTML = "document.querySelector('h2').innerHTML = 'Exercice 1'";
console.log(rajoute);

// 4
let sect1 = document.querySelectorAll('section')[0];
let nomId = sect1.id
console.log(nomId);

// 5
let premTitre = document.querySelectorAll('h1')[0];
let nomClass = premTitre.className
console.log(nomClass);

// 6
let nomh1 = document.querySelectorAll('h1');
let nomClass1 = nomh1.className;
let nomClassF = Array.from(nomh1);
console.log(nomClassF);

nomClassF.forEach(element => {
    console.log(element.className);
});

// 7
let inp = document.querySelectorAll('input')[0];
console.log(inp);

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

