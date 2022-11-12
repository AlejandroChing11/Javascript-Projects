class animal {
    constructor(edad, color, especie) {
        this.especie = especie;
        this.color = color;
        this.edad = edad;
    }
}

const perro = new animal("perro", "negro", 18);

console.log(perro);

