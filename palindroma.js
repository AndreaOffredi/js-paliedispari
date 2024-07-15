// 1) chiediamo la parola all'utente
let parolaUtente = prompt('inserisci una parola')

// 2) convertiamo la parola inserita dall'utente in lettere minuscole
let parolaMinuscola = parolaUtente.toLowerCase()

// 3) creiamo la funzione per calcolare se la parola è palimdroma o meno
function isPalindrome (parola) {
    let lunghezzaParola = parola.length
    let risultato

    for (let i = 0; i < lunghezzaParola; i++) {
        if (parola[i] === word[(lunghezzaParola - 1) - i]) {
            risultato = true
        } else {
            risultato = false
        }
    }

    return risultato
}

// 4) verifichiamo se la parola è Palindroma
let verifica = isPalindrome(parolaMinuscola)

if (verifica) {
    console.log('La parola ' + parolaUtente + 'è palindroma')
} else {
    console.log('La parola ' + parolaUtente + 'non è palindroma')
}