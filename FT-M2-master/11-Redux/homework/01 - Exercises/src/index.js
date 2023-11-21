const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
const valor = document.getElementById('valor');

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  const currentState = store.getState().contador;
  // esto me va devolver el objeto con el contador dentro, con el punto le indicamos que solo queremos el valor del contador
  //*{0}
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = currentState;
}

// Ejecutamos la función 'renderContador':
renderContador();
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
// Subscripcion al Store:
//al suscribirse sirve para que una funcion que estar obteniendo el state del store, se ejecute cada vez que haya un dispatch
store.subscribe(renderContador)

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
//me traigo el elemento/el boton con id decremento del html
document.querySelector('#decremento').addEventListener(
  'click', () =>{
    store.dispatch(decremento())
  }
)
document.querySelector('#incremento').addEventListener(
  'click', () =>{
    store.dispatch(incremento())
  }
)
