const FORM = document.getElementById('formulario');
const INPUT = document.getElementById('input1');
const SEARCH = document.getElementById('button');
const CONTAINER = document.getElementById('container__card');

/*  FUNCIONES UTILES */

const isEmpty = (idIngresado) => !idIngresado ? true : false;

const showError = (message) => console.log(message);

const notExist = (idIngresado) => {


    return pizzas.some((pizza) => {
        idIngresado === pizza.id
    });

}


/*  local storage */

const pizza = (JSON.parse(localStorage.getItem('pizzas'))) || []

const savedPizzaLocalStorage = (pizzaRenderizada) => localStorage.setItem('pizza', JSON.stringify(pizzaRenderizada))

/* Validacion */

const funcion = (e) => {
    e.preventDefault();

    idIngresado = Number(INPUT.value);

    if (isEmpty(idIngresado)) {
        console.log(notExist)
        return showError('ingresa un numerito')
    }

    if (notExist(idIngresado)) {
        return showError('El ID ingresado no corresponde con ninguna de nuestras Pizzas')
    }


}



/* INIT */


const init = () => {

    FORM.addEventListener('submit', funcion);

}
init();




