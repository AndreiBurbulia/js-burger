// creo la lista con gli ingredienti e con i prezzi

var listaIngredienti = [
    ["cheese", 1.5],
    ["fried-egg", 2],
    ["ketchup", 0.5],
    ["lettuce", 1],
    ["mustard", 0.5],
    ["tomato", 1]
];
console.log(listaIngredienti);

//vado a stampare su html le card in base agli ingredienti presenti
var elementoContenitore = document.querySelector(".ingredients");
console.log(elementoContenitore);

for (var i = 0; i < listaIngredienti.length; i++) {
    elementoContenitore.insertAdjacentHTML("beforeend",
        `<div class="form_group">
                <img src="./assets/img/${listaIngredienti[i][0]}.svg" alt="Immage of ${listaIngredienti[i][0]}">
                <label for="${listaIngredienti[i][0]}">${listaIngredienti[i][0]}</label>
                <input type="checkbox" name="${listaIngredienti[i][0]}" id="${listaIngredienti[i][0]}" data-price="${listaIngredienti[i][1]}">
        </div>`);
}

//devo andare a vedere quando il pulsante viene schiacciato
//vado a vedere qualche check sono selezionate
//stabilisco un prezzo base del panin0
//calcolo il prezzo del panino


//vado a prendere tutti gli elementio che sono input con type checkbox
var check = document.querySelectorAll("input[type='checkbox']");
console.log(check);

//inizzializzo i prezzi base del panino e della somma
var prezzoBase = 8.99;
var sommaIngredienti = 0;

//vado a vedere quali elementio sono selezionati cosa da aggiungerli al prezzo del panino
for (var i = 0; i < listaIngredienti.length; i++) {
    var elemento = check[i];

    //vado a prednere ogni elemento dei checkbox e estraggo il suo valore prezzo
    var prezzoIngrediente = Number(elemento.getAttribute('data-price'));
    console.log(prezzoIngrediente);

    //se l'elemento e selezionato vado ad aggiungere il suo valore
    if (elemento.checked) {
        sommaIngredienti += prezzoIngrediente;
    }
}
console.log(sommaIngredienti);

var totalePanino = prezzoBase + sommaIngredienti;
console.log(totalePanino);
/*
function calcolaPrezzo() {

}
*/