// Los Loops son maneras rapidas y sencillas de poder hacer que una tarea se repita muchas veces. Consta de una estructura llamando una función, dicha funcion tiene una tarea que se repetirá siempre y cuando la condición sea verdadera.

//BUCLE FOR NORMAL CON TRES ELEMENTOS PARA INCICIALIZAR, CONDICIONAR PERMANENCIA Y ACTUALIZAR LA VARIABLE.

var comida = ["Hamburguesa", "Perro", "Pizza", "Sushi"];
function MegustaComer(comida){
    console.log(`Hola me gusta la/el ${comida}`);
}

for(var i = 0; i < comida.length; i++){
    MegustaComer(comida[i]);
}



// BUCLE FOR WITH "OF"

var comida = ["Hamburguesa", "Perro", "Pizza", "Sushi"];
function MegustaComer(comida){
    console.log(`Hola me gusta la ${comida}`);
}
for(var comidas of comida){
    MegustaComer(comidas);
}

//FOREACH NOS PERMITE ITERAR DENTRO DE UN ARRAY DE MANERA SECUENCIAL.
var comida = ["Hamburguesa", "Perro", "Pizza", "Sushi"];
comida.forEach(function(item, posicion) {
    console.log(`Hola, me gusta la ${item}, su posicion es ${posicion}`)
})

//FOR IN: NOS PERMITE RECORRER LAS PROPIEDADES DE UN ARRAY DE MANERA SENCILLA---MUY PARECIDO AL FOR "EACH".

var Mihistoria = {
    titulo: "Las historias de Alejo",
    año: 2022,
    mes: "Octubre",
    precio: "15000 dolares",
}
for (var item in Mihistoria) {
    console.log(`Hola Mi libro ${item}, contiene ${Mihistoria[item]}`);
}