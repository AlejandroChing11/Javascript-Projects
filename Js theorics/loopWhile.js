//WE WILL LEARN HOW TO USE WHILE.
var juegos = ["Call of duty 4", "Assassins creed 3", "Fifa 23", "Apex Legends"];

function JuegosGod(juegos) {
    console.log(`El juego ${juegos} es muy GODDD`);
}
while(0 < juegos.length) {
    var juego = juegos.shift();
    JuegosGod(juego);
}