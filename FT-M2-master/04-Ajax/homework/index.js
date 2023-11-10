//crear un botton que al hacer click, aparezca una lista en
// el dom( get ) con todos los amigos
//crear un boton 'buscar' get id-> devulve el elemento
// crear boton 'borrar' delete id -> borra el id
//-  Para manipular un elemento de html en con jquery debes usar $('#id-elemento') agregandole como arguemnto el id del 


//elemento que quieres manipular
/* <button id='boton'>Ver Amigos</button>
  <ul id='lista'>
  </ul> 
  tengo una ul vacia que es el padre
  query Selector id del padre
  1.- necesito crear un lemento de tipo li, va estar vacio al inicio
  2.- con innerHTML  le paso*/

const button = document.getElementById('boton') // busco o llamo al id boton
// este lo voy a necesitar al enlazar el escucha con el botton
const lista = document.getElementById('lista')// asigno el id lista a la variable lista para enlazarlos
const URL = `http://localhost:5000/amigos` // guardo la url en una variable

function createList(){// creo la funcion
    lista.innerHTML = ''// declaro la lista vacia al inicio para irla limpiando
    $.get(`${URL}`, (res) => {// importante ponerle el template string
        // pido los datos al servidor con la url que es la const, la r3spuesta es un []
        console.log('----> ', res);// primero vamos a consologear la respuesta para verlo
        // la funcion me va devolver
        res.forEach((element)=>{// para cada elemento de res. le aplico foreach
            let li = document.createElement("li")// creo un li
            li.innerHTML = element.name// le asigno el nombre de cada elemento a cada li
            lista.appendChild(li) // agrego cada li al padre lista
        });
    })
}
boton.addEventListener('click', createList)//  creo el enlace o el escucha
// en el id button, al hacer click, me arroja la funcion createlist

//crear un boton 'buscar' get id-> devulve el elemento
// enlazar el  id a la variable
//<button id='search'>Buscar</button>
// crear la funcion
// la funcion va a recibir un id y devuelve el nombre del amigo
const search = document.getElementById('search')// $('#search')
// enlazo el booton(id) con la variable
function buscarAmigo (){
    //creo la funcion buscarElAmigo que va recibir un id por param
    let id = document.getElementById('input').value //$('#input').val()
    // la variable id me va dar el valor del input
    //     <span id='amigo'></span>
         let amigo = $('amigo')
         amigo.empty()
         $.get(`${URL}/${id}`, (res)=>{// esto lo hace jquery, yo le mando la ruta
            // con backsticks y me devuelve una respuesta
            console.log('Mi migo es', res)
            amigo.text(res.name)

         })
         document.getElementById('input').value = '';
   
}
//enlazar el evento click con la función buscarelamigo
// cuando se haga clic en el botón buscar
search.addEventListener('click', buscarAmigo)

    // crear boton 'borrar' delete id -> borra el id
//     <button id='delete'>Delete</button>
//   <span id='success'></span>
// crear la función
// la función va a recibir un id y borrara el nombre del amigo
const deleteBtton = document.getElementById('delete')

function borrarAmigo (){
    //creo la función borrarAmigo que recibe el id del amigo por parámetro
    let id = document.getElementById('inputElete').value 
    //console.log( '--->', id);
    if(id){
        var searchDelete// si no encuentra
        $.get(`${URL}`, (res) => {
           
            res.forEach((element)=>{// para cada elemento de res. le aplico foreach
               if(element.id === Number(id)){
                searchDelete = element// si lo encuentra lo guarda
               }//!los values que vienen de los inputs llegan como string
     });
     console.log('02', searchDelete);
     if(searchDelete){
     let span = $('#success');
     $.ajax({
     url: `${URL}/${id}`,
          method: "DELETE",
          dataType: "json",
          success: function (response) {
            console.log(response);
            span.text(searchDelete.name)
            viewList()
          },error: function (xhr, status, error) {
            console.log(error);
          },
        });
      } else {
        alert("ese amigo ya no existe");
      }
    });
  } else {
    alert("no hay id");
  }
  document.getElementById("inputDelete").value = ""
}
deleteBtton.addEventListener("click", deleteUser);
//enlazar el evento click con la función borrarelemigo
//cuando se haga clic en el botón borrar

