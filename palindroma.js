// 1) chiediamo la parola all'utente
let parolaUtente = prompt('inserisci una parola')

// 2) convertiamo la parola inserita dall'utente in lettere minuscole
let parolaMinuscola = parolaUtente.toLowerCase()

// 3) creiamo la funzione per calcolare se la parola è palimdroma o meno
function isPalindrome (parola) {
    let lunghezzaParola = parola.length

    for (let i = 0; i < Math.floor(lunghezzaParola / 2); i++) {
        if (parola[i] !== parola[(lunghezzaParola - 1) - i]) {
            return false
        } 
    }

    return true
}

// 4) verifichiamo se la parola è Palindroma
let verificata = isPalindrome(parolaMinuscola)

if (verificata) {
    console.log('La parola ' + parolaUtente + ' ciaoè palindroma')
} else {
    console.log('La parola ' + parolaUtente + ' non è palindroma')
}