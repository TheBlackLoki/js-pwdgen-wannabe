// creiamo variabili
var nome
var cognome
var colorePreferito
var password
// chiediamo input all'utente
nome = prompt("inserisci il tuo nome")
cognome = prompt("inserisci il tuo cognome")
colorePreferito = prompt("inserisci il tuo colore preferito")
// generare password per utente
password = nome + cognome + colorePreferito + 19
// mostra sulla pagina la password generata
document.getElementById('passwordgenerata').innerHTML= "Ciao " + nome + " la password consigliata per te è: " + password
