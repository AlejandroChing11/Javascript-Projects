var jugador = "Tijera"
var cpu = "Papel"

if (jugador == "Piedra" && cpu == "Piedra" || jugador == "Papel" && cpu == "Papel" || jugador == "Tijera" && cpu == "Tijera") {
    console.log("EMPATE");
} else if (jugador == "Tijera" && cpu == "Papel" || jugador == "Papel" && cpu == "Piedra" || jugador == "Piedra" && cpu == "Tijera") {
    console.log("Ganaste!");
} else if (jugador ==  "Tijera" && cpu == "Piedra" || jugador == "Piedra" && cpu == "Papel" || jugador == "Papek" && cpu == "tijera") {
    console.log("Perdiste!");
}