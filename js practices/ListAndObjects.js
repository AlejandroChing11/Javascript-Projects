//LET´S REVIEW ARRAYS AND OBJECTS.
let Comida = ["Hamburguesa", "Pizza", "Perro", "Sandwich"];

function Miscomidas(comida) {
    console.log(comida[0]);
}

Miscomidas(Comida);

function Unoporuno (comida) {
    for (let i = 0; i < comida.length; i++) {
        console.log(comida[i])
}
}

Unoporuno(Comida);

let MyTienda = {
    Juego1: "Fifa 23",
    Juego2: "Call of Duty",
    Juego3: "Pes 23",
}

function conteo(MyTienda) {
    for (let i in MyTienda) {
        console.log(MyTienda[i])
    }
}

conteo(MyTienda);