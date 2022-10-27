"use strict"
// definisco la lista della spesa 
const shoppingList = [
    'Pane',
    'Latte',
    'Vino',
    'Birra',
    'sale'
];
let i = 0
const list = document.getElementById('lista-spesa')

while (i < shoppingList.length ) {
    console.log(shoppingList[i]);
    const listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    list.append(listItem);
    console.log(listItem);
    i++    
    

}


