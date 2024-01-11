/*
todo: peticiones <-> get post put delete
JQUERY -> AJAX
jquery Selectores  -->$('#agregar')
jquery es una libreria que cambia la sintaxis se pone el signo 

jquey <-> AJAX: peticiones
fetch... en vez de const inf = fetch.get(etc) 
                             = $.get
axios -> cambia a otra sintaxis

*/
// quiero buscar unos usuarios y apender o enlazarlos a la lista
var button = document.getElementById('agregar')
var lista = document.getElementById('usuarios')
// estoy enlazando los  botones

function  createList(){
    lista.innerHTML= ''// lo voy a dejar en blanco
    $.get('https://jsonplaceholder.typicode.com/users/1'), (res) => {
         console.log(res);
         //estoy pidiendo con el jquery($.get) el usuario 1
         //res es la funcion que va indicar que hacer... en este caso consologear
         res.forEach(element => { // para cada elemento
            let li = document.createElement('li')// creo una nueva li
            li.innerHTML = element.name//  aqui modificamos el li = elemen.name
            lista.appendChild(li)// le agregamos el li a lista
         });
        }
}
button.addEventListener('click', createList)
