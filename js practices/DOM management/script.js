const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const button = document.querySelector('#btncalcular');
const p = document.querySelector('#answer');
const form = document.querySelector('#form');

form.addEventListener("submit", formOnClick);

//VAMOS A ESCUCHAR LOS EVENTOS O LO QUE HAGA EL USUARIO, SE CREA UNA FUNCION PARA PONERLA EN EL HTML.
function formOnClick (event) {
    const InputsSum = Number(input1.value) + Number(input2.value);
    event.preventDefault();
    //PARA ACCEDER A LO QUE VA DENTRO DE ESE <P><"/P".
    p.innerText = "El resultado de la suma es de: " + InputsSum;
}



