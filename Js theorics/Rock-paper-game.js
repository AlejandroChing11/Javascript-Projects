//LET´S PLAY ROCK-PAPER AND SCISSORS.

var Piedra = "Piedra";
var Papel = "Papel";
var Tijera = "Tijera";

function Game(Jugador, cpu) {
    switch(true) {
        case Jugador == Piedra && cpu ==  Papel:
            console.log("PERDISTE :(")
            break;
        case Jugador == Piedra && cpu == Tijera:
            console.log("GANASTE!")
            break;
        case Jugador == Piedra && cpu == Piedra:
            console.log("EMPATE")
            break;
        
        case Jugador == Papel && cpu == Tijera:
            console.log("PERDISTE :(")
            break;
        case Jugador == Papel && cpu == Piedra:
            console.log("GANASTE!")
            break;
        case Jugador == Papel && cpu == Papel:
            console.log("EMPATE")
            break;
        
        case Jugador == Tijera && cpu == Papel:
            console.log("GANASTE!")
            break;
        case Jugador == Tijera && cpu == Piedra:
            console.log("PERDISTE :(")
            break;
        case Jugador == Tijera && cpu == Tijera:
            console.log("EMPATE")
            break;
    }
}
Game(Piedra, Tijera);



