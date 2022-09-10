var productos = [
    { Nombre: "Play5", costo: 500},
    { Nombre: "Fifa 23", costo: 80},
    { Nombre: "Joystick", costo: 30},
    { Nombre: "Headphones", costo: 50},
]

//"FIND" = LO QUE HACE ES ENCONTRAR O BUSCAR POR UN ELEMENTO QUE PIDAMOS. GENERA OTRO ARRAY
var Encuentraproduct = productos.find(function(producto) {
    return producto.Nombre === "Fifa 23"
});
Encuentraproduct 

//"FOR EACH" -- NO GENERA OTRA FUNCION.
productos.forEach(function(producto) {
    console.log(producto.Nombre);
});

//"SOME" REGRESA UN V O F PARA ARTICULOS DE LA VALIDACION QUE LE DEMOS SE GUARDA EN OTRO ARRAY.


var ProductosBaratos = productos.some(function(producto) {
    return producto.costo <= 50;
});

ProductosBaratos

