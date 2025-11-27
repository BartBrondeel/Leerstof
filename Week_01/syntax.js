console.log('hello world2');

// variabelen en constanten
const ageConst = 35; // dit is een constante
let ageVar = 30; // dit is een variabele
//var ageVarVerouderd = -1; //best dit niet gebruiken, maar werkt zoals een let

// ageConst += 5; werkt niet want ageConst is een constante

/*
let ageLet=31;

{
	ageLet = ageLet + 1;
	console.log(ageLet);
	let firstname='jens';
}

console.log(ageLet);
console.log(firstname);*/

/*var ageLet=31;

{
	ageLet = ageLet + 1;
	console.log(ageLet);
	var firstname='jens'; // deze variabele blijft bestaan buiten deze code-block
}

console.log(ageLet);
console.log(firstname);*/

const rij2 = [1, 2, 3]; // rij2 (idem voor objecten) is een referentie naar een array
// dit wil zeggen dat je de achterliggende lijst kan aanpassen maar geen nieuwe erin steken
// bij het overschrijven met een nieuwe rij pas je namelijk de referentie aan
rij2.push(4);
console.log(rij2);

//rij2 = [1,2,3,4];

// operaties
ageVar += 5;
ageVar -= 6;
ageVar = ageVar * 2;

ageVar = true;
ageVar = 'vijfendertig';

console.log(ageConst, ageVar);

// datatypes

const zin = 'dit is een zin';
const leeftijd = 32;
const gewicht = 76.3;
const mannelijk = true;
const namen = ['pief', 'poef', 'paf'];
const birthdate = new Date();
const leegObject = undefined;
const nullVariabele = null;
const leegobject = null;

console.log(zin, typeof(zin));
console.log(leeftijd, typeof(leeftijd));
console.log(gewicht, typeof(gewicht));
console.log(mannelijk, typeof(mannelijk));
console.log(namen, typeof(namen));
console.log(birthdate, typeof(birthdate));
console.log(leegObject, typeof(leegObject));
console.log(nullVariabele, typeof(nullVariabele));

// object

const obj = new Object();

obj.zin = 'dit is een zin';
obj.leeftijd = 32;
obj.gewicht = 76.3;
obj.mannelijk = true;
obj.namen = ['pief', 'poef', 'paf'];
obj.birthdate = new Date();
obj.leegObject = undefined;
obj.nullVariabele = null;
obj.leegobject = null;
obj['nieuwe variabele'] = 'test';

console.log(obj);

console.log(obj.zin);
console.log(obj['gewicht']);
console.log(obj.gewicht);
console.log(obj['gewicht2']);
//console.log(obj.nieuwe variabele);
console.log(obj['nieuwe variabele']);
let tmp = birthdate.toDateString();
console.log(tmp);
console.log(new Date(2025,11,25,14));

let obj2 = {
	zin : 'tweede zin',
	gewicht2 : obj.gewicht
};  // json notatie

console.log('tweede object', obj2);

const mySelf = {
	lastName: 'Bundervoet',
	surName: 'Jonas',
	age : 25,
	studentHouse : false
};
/*
mySelf = {
	lastName: 'Bundervoet',
	surName: 'Jonas',
	age : 26,
	studentHouse : false
};*/

mySelf.age += 1;
console.log(mySelf.age);

// arrays

console.log(obj.namen[2]);
console.log(obj['namen'][2]);

let rij = obj.namen;

console.log(rij);

console.log(rij[2]); // zoek 1 element in een array

rij[10]='jantje';
console.log(rij);
console.log(rij[6]);

rij.push('jens'); // voeg op het einde een element toe
console.log(rij);

console.log(rij.pop()); // verwijder het laatste element
console.log(rij);

console.log(rij.shift()); // verwijder het eerste element
console.log(rij);

rij.unshift('jens'); // voeg aan het begin een element toe
console.log(rij);

rij[rij.length]='jens'; // gelijk aan rij.push('jens');
console.log(rij);

// Controlestructuren
console.clear();

const maxAge = 100;
const minAge = 18;
let age = 10;

if(age > maxAge){
	console.log('ongeldige leeftijd');
} else if(age <minAge) {
	console.log('te jong');   
} else {
	console.log('geldige leeftijd');
}

let var1 = 3;
let var2 = '3';

if (var1 == var2){
	console.log('var1 == var2 geeft true');
} else {
	console.log('var1 == var2 geeft false');
}

console.log('var1 === var2 geeft', var1===var2); 
// met drie keer = controleert javascript ook het datatype

let fruit = 'kokosnoot';

if(fruit === 'appel'){
	console.log('an apple a day keeps the docter away');
} else if(fruit === 'banaan'){
	console.log('alle apen eten graag bananen');
} else if(fruit=== 'druiven'){
	console.log('van druiven maakt men wijn');
}

switch (fruit){
case 'appel':
	console.log('an apple a day keeps the docter away');
	break;
case 'banaan':
	console.log('alle apen eten graag bananen');
	break;
case 'druiven':
	console.log('van druiven maakt men wijn');
	break;
default:
	console.log('dit fruit ken ik niet');
}


/*Opdracht: 
Schrijf een stuk code waarbij je aangeeft of een jaar een schrikkeljaar is of niet. 
Schrijf een stuk code hoeveel dagen er in een bepaalde maand zitten.
*/

// schrikkeljaar is een jaar modulo 4 == 0 behalve als het % 100 == 0 is behalve als het % 400 is
let jaar = 2000;
if (jaar % 400 === 0){
	console.log('schrikkeljaar');
} else if(jaar % 4 ===0){
	if(jaar % 100 === 0){
		console.log('geen schrikkeljaar');
	} else {
		console.log('schrikkeljaar');
	}
} else {
	console.log('geen schrikkeljaar');
}

let maand = 'maart';
switch (maand){
case 'februarie':
	console.log('28 dagen');
	break;
case 'januari':
case 'maart':
case 'mei':
case 'juli':
case 'augustus':
case 'oktober':
case 'december':
	console.log('31 dagen');
	break;
default:
	console.log('30 dagen');
}

//for
for(let i =0; i <=10; i++){
	console.log(i);
}

//while
let counter = 10;
while(counter > 0){
	counter -= 1;
	console.log(counter);
}

//dowhile
// minstens 1 keer uitgevoerd 
counter = 0;
do {
	counter += 1;
	console.log(counter);
} while(counter < 10);

//.foreach
/*int Function(int age, int b){
	return 0;
}*/

function logger(item){
	console.log(item);
}

/*let a = logger(5);
console.log(a);
*/

//console.log(namen);
namen.forEach(logger);

//for in
namen[10] = 'Jens';
// in een rij geeft dit de indices weer van de items (empty wordt genegeerd)
// in een obj krijg je de keys weer van het object (de linkerzijde)
for(let i in namen){
	namen[i];
	console.log(i);
}
for(let i in obj){
	console.log(i);
}
//for of
for(let i of namen){
	console.log(i);
}
// dit niet gaat niet werken want object heeft exact de keys nodig
/*for(let i of obj){
	console.log(i);
}*/

/*Opdracht: 
Print voor een gegeven getal alle maaltafels tot 10 met oplossing.
Verwijder alle spaties aan het begin van een string (zonder gebruik te maken van trim()) tip met slice kan je een stuk van een string verwijderen.
Print voor elke woord in een lijst het aantal karakters.
*/
//vraag 1
let getal = 5;
for(let i = 0; i < 10; i++){
	console.log(getal + '*' + i + '=' + i*getal);
	console.log(`${i}*${getal}=${i*getal}`);
}

//vraag 2
let tekst = '     ik ben jens';
while(tekst[0] == ' '){
	console.log('spatie');
	tekst = tekst.slice(1);
}
console.log(tekst);

let idx = 0;
for(idx; idx<tekst.length; idx++){
	if(tekst[idx] != ' '){
		break;
	}
}
console.log(tekst.slice(idx));

//vraag 3
let lijstje = 'ik ben jens baetens'.split(' ');
for(let woord of lijstje){
	console.log(woord, woord.length);
}


//function without arguments
function helloWorld(){
	console.log('hello world!');
}

helloWorld();

//function with arguments
function helloWorld2(naam){
	console.log(`hello world ${naam}`);
}

helloWorld2('Jens');

function sum(a, b){
	return a+b;
}

console.log(sum(10, 100));

//self-invoking function

(function(){
	let localVar = 5;
	//hierdoor kan je variabelen van andere bestanden/libraries niet aanpassen
	// dit is veiliger
})();

//met naamloze functie
namen.forEach(function(item){console.log(item);});

//lambda expressies arrow function
namen.forEach(item => {
	console.log(item);
});