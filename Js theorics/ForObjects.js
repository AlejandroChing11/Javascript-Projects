//PENDIENTE DE HACER EL LOOP PARA LLENAR UN OBJETO. dentro de la carpeta esta el algoritmo guia.
let autos = []
let autosregistrados = 0;
let cantidadAutos = 0;


function Auto(Marca, Año, cc) {
    this.Marca = Marca;
    this.Año = Año;
    this.cc = cc;
}


cantidadAutos = prompt("Cuantos autos deseas registrar");


while (autosregistrados < cantidadAutos) {
    var Marca = prompt("Marca: ");
    var Año = prompt("Año: ");
    var cc = prompt("cc: ");

    var autoNuevo = new Auto(Marca, Año, cc);
    autos.unshift(autoNuevo);

    autosregistrados++;
}



console.log(autos);
