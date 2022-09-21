const h1 = document.querySelector('h1');
const paragraph = document.querySelector('.parrafo');
const ConId = document.getElementById('P2');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    paragraph,
    ConId,
    input,
});
h1.innerHTML = "Alejandro Ching De Franco"; //Este convierte o interpreta HTML original.
h1.innerText = "Alejandro Miguel Ching Franco"; //Este convierte todo lo que está entre parentesis como texto.
//console.log(h1.getAttribute(`Nombre`));
//console.log(h1.setAttribute(`Nombre`, `Mei Li ching`));
//h1.classList.add("Rojo"); Para agregar lists
//h1.classList.remove("Rojo"); //Sirve como contenedor de logins.

//input.value = 456 Este es para cambiar el elemento y editar la etiqueta.
const img = document.createElement(`img`);
img.setAttribute("src", `https://www.muycomputer.com/wp-content/uploads/2021/08/Spider-Man.jpg`);
console.log(img);
P2.append(img);