/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for(let i = 0; i < pets.length; i++){
  console.log(pets[i]);
}

  
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
let pets2 = pets.sort()
console.log(pets2)
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let pets3 = pets.reverse()
console.log(pets3)
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets.shift()) 
console.log(pets) /*ovviamente il risultato redfish alla fine è dovuto al risultato dell'esercizio 4 che lo aveva messo come primo*/
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
for (const i5 of cars) {
  i5['licensePlate'] = 'EB259XY'
}
console.log (cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push ({brand: 'Fiat',
model: 'Panda',
color: 'white',
trims: ['burdina', 'burda', 'burdissima'],})
console.log(cars)

cars.forEach(i6 =>{
  i6.trims.pop()
})
console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(let i7= 0; i7 < cars.length; i7++){
  justTrims.push(cars[i7].trims[0])
}
console.log(justTrims)
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i8= 0; i8 < cars.length; i8++){
  risultato5 = cars[i8]
   if (risultato5.color[0] == "b"){
  console.log("Fizz")
} else {
  console.log("Buzz")
}
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
let i9 = 0
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
while(numericArray[i9] !== 66){ //in caso caso abbia capito male e il 32 non era compreso, mettere 32 al posto di 66
  console.log(numericArray[i9]);
  i9++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
let nuovoArray = []
const charactersArray = ['g', 'n', 'u', 'z', 'd']
for(let i10= 0; i10 < charactersArray.length; i10++) {
  risultato10 = charactersArray[i10]
  switch (risultato10){
    case "g": 
    nuovoArray.push(7);
    break;
    case "n": 
    nuovoArray.push(12);
    break;
    case "u": 
    nuovoArray.push(19);
    break;
    case "z": 
    nuovoArray.push(21);
    break;
    case "d": 
    nuovoArray.push(4);
    break;
  }
}

console.log(nuovoArray)