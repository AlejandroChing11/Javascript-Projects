var productos = [
    { Nombre: "Play5", costo: 500},
    { Nombre: "Fifa 23", costo: 80},
    { Nombre: "Joystick", costo: 30},
    { Nombre: "Headphones", costo: 50},
]

//"FILTER" = PARA FILTRAR CIERTAS COSAS Y VA A VALIDAR SI ES V O F O LOS METE EN UN NUEVO ARRAY.

var Productosfilt = productos.filter(function(producto) {
    return producto.costo <= 50;
});
Productosfilt 

//"MAP" = ME VA A AYUDAR A MAPEAR CIERTOS ARTICULOS, Y TAMBIEN GENERA UN NUEVO ARRAY.
var NombresProduct = productos.map(function(producto) {
    return producto.Nombre;
})
NombresProduct