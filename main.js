const FORM = document.getElementById('formulario');
const INPUT = document.getElementById('input1');
const SEARCH = document.getElementById('button');
const CONTAINER = document.getElementById('container__cardID')

/*  FUNCIONES UTILES */

const isEmpty = (idIngresado) => !idIngresado ? true : false;

const showError = (message) => {
    CONTAINER.innerHTML = `
    <h2 class="errorNotFound">${message}</h2>
    
    `
};

const notExist = (idIngresado) => {


    return !pizzas.some(e => e.id == idIngresado)

};

const findPizza = (idIngresado) => {

    return pizzas.find(pizza => pizza.id == idIngresado)


}

const renderPizza = (pizza) => {
    if (pizza.length === 0) {
        return
    } else {
        CONTAINER.innerHTML = `
    <div class="card">
    <h2 class="card__h2">Pizza ${pizza.nombre}</h2>
    <img class="card__img" src="IMG/${pizza.imagen}.jpg"" />
    <h3 class="card__ingredientes">${pizza.ingredientes.join(' - ')}</h3>
    <h3 class="card__precio">Precio</h3>
    <h3 class="card__precio-number">$${pizza.precio}</h3>
  </div>`
    }
}



/*  local storage */

let onPizza = (JSON.parse(localStorage.getItem('pizza'))) || []

const PizzaLocalStorage = (onPizza) => localStorage.setItem('pizza', JSON.stringify(onPizza))

const resetLS = () => onPizza = localStorage.setItem('pizza', JSON.stringify([]))

/* Validacion */

const validId = (e) => {
    e.preventDefault();

    idIngresado = Number(INPUT.value);


    if (isEmpty(idIngresado)) {
        resetLS()
        return showError('Ingrese un numero')
    }

    if (notExist(idIngresado)) {
        resetLS();
        FORM.reset();
        return showError('El ID ingresado no corresponde con ninguna de nuestras Pizzas')

    } else {


        renderPizza(findPizza(idIngresado))

        PizzaLocalStorage(findPizza(idIngresado))

    }
    FORM.reset();
}



/* INIT */


const init = () => {
    PizzaLocalStorage(onPizza)
    renderPizza(onPizza)
    FORM.addEventListener('submit', validId);

}
init();


