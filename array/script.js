// Array

let arr = new Array(); // Creo un nuovo array 

// arr = ['Number','String','Boolean','Undefined','Null','Object']

 // let arr = ['Number','String','Boolean','Undefined','Null','Object']

let primoelemento = 'Primo';

arr.push(primoelemento); // Inserisco un elemento in ultima posizione dell'array

console.log(arr);

let secondoelemento = 'Secondo';

arr.push(secondoelemento);

console.log(arr);

let terzoelemento = 'Terzo';

arr.push(terzoelemento);

console.log(arr);

//arr.pop(terzoelemento); // elimino un elemento in ultima posizione dell'array

//console.log(arr);











const main = document.getElementById("main"); // seleziono il div con id main e lo conservo 
const crcontainer = document.createElement("div"); // creo un elemento div e mi salvo tutto il procedimento in una costante
crcontainer.classList.add("container"); // aggiungo una classe all'elemento mentre lo creo
main.appendChild(crcontainer);// aggiungo al div prima selezionato un child
const crdiv = document.createElement("div");// uguale a crcontainer
const crparag = document.createElement("p");// uguale a crcontainer
crcontainer.appendChild(crdiv);// stesso concetto
crdiv.appendChild(crparag);// stesso concetto 












for(let i =0;i<arr.length;i++){ // creo un ciclo che esegue istruzione tante volte finchè non arrivo alla lunghezza dell'array

const crdiv = document.createElement("div");
const crparag = document.createElement("p");              // definisco logicamente quello che devo fare per ogni volta che eseguo il ciclo, in questo caso per quanto è lungo l'array
    crcontainer.appendChild(crdiv);
    crdiv.appendChild(crparag);
    crparag.innerHTML = `${arr[i]}`// aggiungo al paragrafo il valore dell'array in posizione i

}












let j = 0;   // i e j sono standard convenzionali per definire variabili contatore

while(j<arr.length){

    const crdiv = document.createElement("div");
    const crparag = document.createElement("p");              
    crcontainer.appendChild(crdiv);
    crdiv.appendChild(crparag);
    crparag.innerHTML = `${arr[j]}`
    j++
}















// SOLO SE SI LAVORA CON ARRAY!


for(nome of arr){

    const crdiv = document.createElement("div");
    const crparag = document.createElement("p");              
    crcontainer.appendChild(crdiv);
    crdiv.appendChild(crparag);
    crparag.innerHTML = nome
}

arr.forEach((nome)=>{const crdiv = document.createElement("div"); // Da approfondire in seguito
const crparag = document.createElement("p");              
crcontainer.appendChild(crdiv);
crdiv.appendChild(crparag);
crparag.innerHTML = nome})













