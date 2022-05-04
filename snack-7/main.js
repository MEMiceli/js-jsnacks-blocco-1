// Snack 7

// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// ho due liste di nomi e cognomi

// lista 1
 const  Nomi = ['ugo','filiberto','anselmo']

// lista 2
const  Cognomi = ['pozzi','mozzi','fozzi']
// lista nomi Composti 

// lista 3

// prendo un dato random da lista uno 
let randomNomi = 0

let randomCognomi = 0

for (let i = 0; i <3, i++) {
    let randomNomi = Math.floor(Math.random() * Nomi.length);

    let randomCognomi = Math.floor(Math.random() * Cognomi.length);
    
}

let NomiCognomi = [(randomNomi + randomCognomi)]
// prendo un dato random da lista 2

console.log(NomiCognomi)

// unisco le due parti e inserisco in lista 3
