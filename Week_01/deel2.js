// Deel 2: Objecten

// ---- Eenvoudig object maken ----
// Maak een object persoon met de eigenschappen: naam, leeftijd en isStudent. 
// Print het object naar de console.
const persoon = new Object();
    persoon.naam = 'Jan';
    persoon.leeftijd = 48;
    persoon.isStudent = true;

console.log(persoon);

// ---- Object lezen en aanpassen ----
// Gebruik het persoon object. 
// Pas de waarde van leeftijd aan en voeg een nieuwe eigenschap hobby toe. 
// Print het aangepaste object.
persoon.leeftijd = 34;
persoon.hobby = 'wandelen';
console.log(persoon);

// ---- Functie in een object ----
// Voeg aan het persoon object een methode toe die de naam en leeftijd print in de vorm: “Jan is 34 jaar oud.”
persoon.methode = function() {
    console.log(`${persoon.naam} is ${persoon.leeftijd} jaar oud`);
}
console.log(persoon);
console.log(persoon.methode());

// ---- Geneste objecten ----
// Maak een object bedrijf met eigenschappen zoals naam, adres (ook een object), en aantalWerknemers. 
// Print het adres van het bedrijf.
const bedrijf = {
    naam: 'Odisee',
    adres: {
        straat: "Kwalestraat 154",
        postcode: 9300,
        gemeente: 'Aalst',
    },
    aantalWernemers: 120,
};

console.log(bedrijf);
console.log(bedrijf.adres);
console.log(bedrijf.adres.straat);
console.log(bedrijf.adres.postcode);
console.log(bedrijf.adres.gemeente);

// ---- Object array ----
// Maak een array van 3 persoon objecten. 
// Loop erdoor met een for-loop en print voor elke persoon: naam en of hij/zij student is.
const persoon1 = new Object();
    persoon1.naam = 'Jan';
    persoon1.leeftijd = 34;
    persoon1.isStudent = true;

const persoon2 = new Object();
    persoon2.naam = 'Bart';
    persoon2.leeftijd = 48;
    persoon2.isStudent = false;

const persoon3 = new Object();
    persoon3.naam = 'Kobe';
    persoon3.leeftijd = 22;
    persoon3.isStudent = true;

// Onze array aanmaken en printen
const personen = [persoon1, persoon2, persoon3];
console.log(personen);

for (const persoon of personen) {
    console.log(persoon.naam, "is student:", persoon.isStudent);
};
