// Snack 8

// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari


// crea lista numeri
 let list = ['3','6','8','10']



let daSommare = [0];

// individuo i numeri dispari
let dispari = 1;


for (let i = 0; i < 4; i++) {
    if (i%2 == 1){
        dispari = (i%2 == 1);
// inserisco numeri dispari nella lista da sommare
        daSommare.push(dispari);
    }   
}

//somma i numeri in posizione dispari
let sum = 0;

for (let i = 0; i < daSommare.length; i++) {
    sum += daSommare[i];
}
console.log(sum);