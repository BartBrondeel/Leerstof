// Deel 3: Arrays

// ---- Basisarray gebruiken ----
// Maak een array van 5 favoriete films. 
// Print de eerste en de laatste film.
const films = ['Pulp Fiction', 'Midnight in Paris', 'Fight Club', 'The Green Mile', 'The Matrix'];
console.log(films);
console.log(films[0], '/', films[films.length - 1]);

// ---- Array manipuleren ----
// Voeg een nieuwe film toe aan het einde van de array. 
// Verwijder de eerste film. 
// Toon de aangepaste array.
films.push('Driven');
films.shift();
console.log(films);

// ---- Door array loopen ----
// Maak een array van getallen en tel met een loop de som van alle getallen bij elkaar op. 
// Toon het totaal.
const getallen = [147, 63, 189, 22, 174, 58, 11, 193, 76, 128, 34, 199, 95, 142, 67];
let som = 0;
for (let i = 0; i < getallen.length; i++) {
    som += getallen[i]
};
console.log(som);

// ---- Array filteren ----
// Je hebt een array met leeftijden: [12, 25, 17, 30, 15, 40]. 
// Filter enkel de leeftijden van mensen ouder dan 18 en toon deze.
const leeftijden = [12, 25, 17, 30, 15, 40];
for (let i = 0; i < leeftijden.length; i++) {
    if (leeftijden[i] > 18) {
        console.log(leeftijden[i])
    }
};

// ---- Combinatie van objecten en arrays ----
// Maak een array van objecten die producten voorstellen, met eigenschappen naam en prijs. 
// Tel de totale prijs van alle producten op.
const prod1 = {
    naam: 'Laptop',
    prijs: 899,
};

const prod2 = {
    naam: 'Smartphone',
    prijs: 1195,
};

const prod3 = {
    naam: 'Koptelefoon',
    prijs: 79,
};

const prod4 = {
    naam: 'Monitor',
    prijs: 245,
};

const prod5 = {
    naam: 'Muis',
    prijs: 59,
};

const prod6 = {
    naam: 'Muismat',
    prijs: 19,
};

const prod7 = {
    naam: 'Balpen',
    prijs: 1,
};

const prod8 = {
    naam: 'Meetlat',
    prijs: 2.99,
};

const prod9 = {
    naam: 'Gom',
    prijs: 1.75,
};

const prod10 = {
    naam: 'Koffiebeker',
    prijs: 7.99,
};

const producten = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10];
console.log(prod1.prijs);
console.log(producten[0].prijs);
let somProducten = 0;
for (let i = 0; i < producten.length; i++) {
    somProducten += producten[i].prijs
};

// toFixed hiermee kan je 1 of meer cijfers na de komma terug geven, maar dit zet het cijfer om in een string
// Met Number ervoor te zetten converteer je het steeds naar een nummer
console.log(Number(somProducten.toFixed(2))); 

// ---- Zoeken in array van objecten ----
// Gebruik de array van producten. 
// Zoek het eerste product waarvan de prijs hoger is dan €20 en print de naam.
let prod20 = '';
for(let i = 0; i < producten.length; i++) {
    if (producten[i].prijs > 20) {
        prod20 = producten[i].naam;
        break;
    }
};
console.log(prod20)


