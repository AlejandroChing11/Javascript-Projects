//COMO GENERAR OBJETOS DE FORMA AUTOMATICA.
//HOW TO GENERATE AN OBJECT.
//UN TEMPLATE.
function Propiedad(Ubicacion, Estrato, precio) {
    this.Ubicacion = Ubicacion;
    this.Estrato = Estrato;
    this.precio = precio;
}

//PARA EMPEZAR A DARLE VALOR.

var InforPropiedad = new Propiedad("Villa Carolina", "3", "100000000");
var InforPropiedad2 = new Propiedad("VIlla Campestre", "5", "200000000");
var InforPropiedad3 = new Propiedad("Golf", "8", "500000000");
