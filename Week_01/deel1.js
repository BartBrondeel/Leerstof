// Deel 1 Variabelen en basisbewerkingen
// Basisvariabelen aanmaken Maak drie variabelen aan: één voor je naam (string), 
// één voor je leeftijd (number) 
// en één voor of je momenteel ingeschreven bent in een cursus (boolean). 
// Print hun waarden naar de console.
const naam = 'Bart Brondeel';
let leeftijd1 = 48;
let ingeschreven = true;

console.log(naam, typeof(naam));
console.log(leeftijd1, typeof(leeftijd));
console.log(ingeschreven, typeof(ingeschreven));

// Simpele berekening Je verdient €12,50 per uur. 
// Bereken hoeveel je verdient als je 8,5 uur werkt. 
// Toon het resultaat in de console.
const uurloon = 12.50
let prestatie = 8.5
let totaal = uurloon * prestatie

console.log(totaal)

// Typeconversie oefenen Je krijgt de input "25" (string) en "5" (string). 
// Tel beide getallen op alsof het getallen zijn. 
// Toon het resultaat in de console. 
// Toon daarna wat er gebeurt als je ze als strings optelt.
let getal1 = Number('25');
let getal2 = Number('5');
let totaal2 = getal1 + getal2;
console.log(totaal2)

let getal3 = ('25');
let getal4 = ('5');
let totaal3 = getal3 + getal4;
console.log(totaal3)

// Werken met const en let Maak een constante variabele voor de BTW (21%). 
// Maak een variabele voor een productprijs en bereken de totaalprijs met BTW. 
// Toon beide in de console. 
// Probeer daarna om de constante BTW aan te passen en observeer het resultaat.
const BTW = 1.21;
let productPrijs = 100;
let totaal4 = productPrijs * BTW;
console.log(productPrijs, 'X', BTW, '=', totaal4)

// Samengestelde string Maak een variabele met je voornaam en één met je achternaam. 
// Print een zin als: “Welkom, Jan Jansen, je bent succesvol ingelogd.”
let voornaam = 'Bart';
let achternaam = 'Brondeel'
console.log('Welkom', voornaam, achternaam, 'je bent succesvol ingelogd')


