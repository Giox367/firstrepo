// Array

let arr = new Array(); // Creo un nuovo array 

let primoelemento = 'Giovanni';

arr.push(primoelemento); // Inserisco un elemento in ultima posizione dell'array

console.log(arr);

let secondoelemento = 'Rosario';

arr.push(secondoelemento);

console.log(arr);

let terzoelemento = 'Martina';

arr.push(terzoelemento);

console.log(arr);

//arr.pop(terzoelemento); // elimino un elemento in ultima posizione dell'array

//console.log(arr);

const main = document.getElementById("main"); // seleziono il div con id main e lo conservo 
const crcontainer = document.createElement("div"); // creo un elemento div e mi salvo tutto il procedimento in una costante
crcontainer.classList.add("container"); // aggiungo una classe all'elemento mentre lo creo
main.appendChild(crcontainer);// aggiungo al div prima selezionato un child
let crdiv = document.createElement("div");// uguale a crcontainer
let crparag = document.createElement("p");// uguale a crcontainer
crcontainer.appendChild(crdiv);// stesso concetto della riga 30
crdiv.appendChild(crparag);// stesso concetto della riga 30

for(let i =0;i<arr.length;i++){ // creo un ciclo che esegue istruzione tante volte finchè non arrivo alla lunghezza dell'array

    let crdiv = document.createElement("div");
    let crparag = document.createElement("p");              // definisco logicamente quello che devo fare per ogni volta che eseguo il ciclo, in questo caso per quanto è lungo l'array
    crcontainer.appendChild(crdiv);
    crdiv.appendChild(crparag);
    crparag.innerHTML = `${arr[i]}`// aggiungo al paragrafo il valore dell'array in posizione i

}











