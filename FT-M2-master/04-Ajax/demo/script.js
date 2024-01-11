
//quieo hacer una peticion de tipo get al server a users
//voy a recibir informacion de usuarios dentro de un array
//quiero mostrar esta informacion armando una lista de nombres de los usuarios

//como hago la peticion 1.- $.get() indico que tipo de peticion es
//2.- le indico a que server le estoy pidiendo, paso la url "https://jsonplaceholder.typicode.com/photos/"
//3.- lleva una funcion callback que se va ejecutar cuando la peticion este lista
//en esta cb le voy a indicar que quiero que haga cuando tenga lista la peticion
// -> (response)=>{} )
//$.get("https://jsonplaceholder.typicode.com/users", (response) => {
  //  console.log(response);
//})
//en consola del navegador podre ver los arrays de la peticion
//response es una funcion que va recibir la respuesta

const URL_BASE = "https://jsonplaceholder.typicode.com";
//este es el servidor con el cual vamos estar trabajando, es mi base general

//PARA HACER LA PETICION DE LOS USERS, pongo la base general del servidor, luego le indico en que punto exacto buscar, en este ejemplo son los users, pero pueden ser otros datos de
$.get(`${URL_BASE}/users`, (response) => {
    response.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = user.name;
      
        
    });

});

