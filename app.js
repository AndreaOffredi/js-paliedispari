// 1) chiediamo gli input all'untente
let sceltaUtente = prompt('PARI O DISPARI?') //string
let numUtente = parseInt (prompt('INSERISCI UN NUMERO DA 1 A 5:')) //number
console.log(sceltaUtente, numUtente)

// 2) creiamo il numero input del computer
function numRandom () {
    return Math.floor (Math.random() * 5) + 1 //number 0 - 5
}

// 3) creiamo la somma fra i due numeri
let numComputer = numRandom()

let somma = numUtente + numComputer
console.log('la somma è: ' + somma)

// 4) calcoliamo se la somma è pari o dispari
function pariDispari (number) {
    if (number % 2 === 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

// 5) vediamo chi è il vincitore
let vincitore = pariDispari(somma)

if (sceltaUtente === vincitore) {
    console.log('HAI VINTO')
} else {
    console.log('HAI PERSO')
}





