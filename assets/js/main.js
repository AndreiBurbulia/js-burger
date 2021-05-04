// creo la lista con gli ingredienti e con i prezzi

var listaIngredienti = [
    ["cheese", 1.5],
    ["fried-egg", 2],
    ["ketchup", 0.5],
    ["lettuce", 1],
    ["mustard", 0.5],
    ["tomato", 1]
];

//vado a stampare su html le card in base agli ingredienti presenti
var elementoContenitore = document.querySelector(".ingredients");

for (var i = 0; i < listaIngredienti.length; i++) {
    elementoContenitore.insertAdjacentHTML("beforeend",
        `<div class="form_group">
                <img src="./assets/img/${listaIngredienti[i][0]}.svg" alt="Immage of ${listaIngredienti[i][0]}">
                <label for="${listaIngredienti[i][0]}">${listaIngredienti[i][0]}</label>
                <input type="checkbox" name="${listaIngredienti[i][0]}" id="${listaIngredienti[i][0]}" data-price="${listaIngredienti[i][1]}">
                <span>add</span>
        </div>`);
}

//controllo quando il pulsante viene schiacciato avvio il calcolo del prezzo in base alle cose selezionate

function calcolaPrezzo() {
    //vado a prendere tutti gli elementio che sono input con type checkbox
    var check = document.querySelectorAll("input[type='checkbox']");

    //inizzializzo i prezzi base del panino e della somma
    var prezzoBase = 8.99;
    var sommaIngredienti = 0;

    //vado a vedere quali elementio sono selezionati cosa da aggiungerli al prezzo del panino
    for (var i = 0; i < listaIngredienti.length; i++) {
        var elemento = check[i];

        //vado a prednere ogni elemento dei checkbox e estraggo il suo valore prezzo
        var prezzoIngrediente = Number(elemento.getAttribute('data-price'));

        //se l'elemento e selezionato vado ad aggiungere il suo valore
        if (elemento.checked) {
            sommaIngredienti += prezzoIngrediente;
        }
    }
    //calcolo il prezzo con gli ingredienti
    var totalePanino = prezzoBase + sommaIngredienti;
    console.log(totalePanino);

    //vado a vedere se ha inserito un codice sconto
    var coupon = document.getElementById("coupon").value;
    console.log(coupon);

    //creo una lista di codici sconto da poter applicare eapplico lo sconto
    var codiciSconto = ["sconto10", "sconto20", "sconto30"];

    if (coupon === "sconto10") {
        totalePanino -= (totalePanino * 0.1);
    } else if (coupon === "sconto20") {
        totalePanino -= (totalePanino * 0.2);
    } else if (coupon === "sconto30") {
        totalePanino -= (totalePanino * 0.3);
    }

    console.log(totalePanino);
    document.getElementById("prezzo_finale").innerHTML = "$ " + totalePanino.toFixed(2);



}

