//todo: let y const

// *const es una varible inmutable en su valor(ojo.. dije en su valor) o en su referencia

const text = 'ejemplo'
const sum = function ( a, b){
    return a+b;
};
// guardamos un espacio en memoria (es como si creamos un contenedor) y trabajamos con su contenido
const CODE_KEY_ID_EMAIL = 'data'
// cuando tenemos datos que no van a cambiar nunca, como el id, el key o el email
const id = '11'
if(true){
    const id = 'john';
    console.log(id);
    //consologeamos dentro del bloque
}
console.log(id); // peter
//consologueamos fuera de la funcion


/* 
let !== let vs var -> LET trabaja por contexto y POR BLOQUE(while, for, if, etc)*/
let name = 'peter'
if(true){
    let name = 'john';
    console.log(name);
}
console.log(name); // peter
// let tiene muchos registros dentro del codigo, tiene un registro para cada bloque

var title = 'peter'
if(true){
    var title = 'john';
    console.log(title);
}
console.log(title); // john
// con var tiene un unico registro y se reutiliza

//todo: Arrow function
// simplifica la sintaxis

function sumNum(a, b){
    var result = a+b
    return result
    }

const sumArrow = (a, b) => a + b;
// si le agregamos llaves desaparece el return, porque piensa que aun falta codigo
console.log(sumArrow(2,3));

//Auto Bind
const objData = {
    prop1: 'hola',
    perros : []
}
 salude(){
       this.perros.forEach(function(perro){
console.log(this.prop1 + '' + perro);        
       });
    }
   
objData.perros.push('dogo')
console.log(objData.salude());



// HRENCIA <- CLASES <- la sintaxis de class
class Person{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
// hace una nueva class que se llama empleado, que es una extencion de persona
class Empleado extends Persona{
    constructor(pay, name, age){// su constructor recibe 3 param
        super(name, age)// se trae los datos del class persona con el super!! no olvidar ponerlo!!
        // si el padre no tiene param el super queda vacio
        this.pay = pay;// solo le pasamos el nuevo param
    }
}

const empleadito = new Empleado('1000', 'Evelyn', 21)
console.log(empleadito);
console.log(empleadito.viewName());

// todo Object Literal
var tipo = 'madera'
var altura = 21
var ancho = 10

function printDoors(tipo, altura, ancho){ 
const dataObjNew = { // si prop tiene el mismo nombre(key) que la varible o param
    // lo reemplaza por el valor de la variable/param
tipo,
altura,
ancho,
}
    // tipo: tipo,
    // altura: altura,
    // ancho: ancho
    
return data
}
console.log(printDoors(tipo, altura, ancho));


// todo: template literals <-> comillas inveertidas <-> backsticks
// podemos alternar strings y variables

function saludoComplejo(name, message, que){
    //return 'Buenas ' + name + ' ' + message + ' ' + que
    return `Buenas ${name}, ${message} y ${que}`

}
console.log(saludoComplejo('Daniela', 'vamos', 'como va'));

//todo : destructuring
//  el destructuring en Object se guia por el nombre de la prop
// con los corchetes me trae el valor
const otro = {
    url: 'webhttp',
    dir: 'antartida',
    nom : 'pepito'
};
var {dir, clave} = otro
console.log(clave);

// el destructuring en array se guia por el index
const flete = [ 3, 'se', 'holis', 'pepe', 'bey'] // tengo un array con valores
const[ , , ...b] = flete // en este ejemplo me esta dando de la segunda posicion hasta el final
console.log(b);
// me devuelve los datos dentro de un array
const daton = [ {}, {}, {}]
const [user, prof, admin] = daton


// con el spread operator puedes copiar los valores rapidamente
const copyOtro = [...otro]
console.log(copyOtro);
// asi se copia del original sin cambiar sus valores
// los cambios que le hagamos el copy no afectaran el original


// todo rest <-< spread
function fufu(x, ...y){// crea un array con los valores de y
    return {x, y}
}
console.log(fufu(3, 21, 45, 'jojo', jaja));