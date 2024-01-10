/* como recorrer el DOM =>
document.body
document.body.children
[e1, e2, e3]
recorren e1,children.length[] 
*/

//3
var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  if(matchFunc(startEl)) resultSet.push(startEl)
  // esta buscando en la funcion match el document.body, si esta lo pushea en el array
for (const child of startEl.children) {
  resultSet.push(...traverseDomAndCollectElements(matchFunc, child))
  
  
}
  return resultSet

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

//1
var selectorTypeMatcher = function (selector) { // $('#pasgetitle') $('.pagetitle')
  // tu código aquí
   if (typeof selector !== 'string') {
    return 'No es un selector válido'; // Si el selector no es una cadena, devuelve un mensaje de error
  }

  // Elimina espacios en blanco al inicio y final del selector
  selector = selector.trim();

  if (selector[0] === '#') return 'id'; // Si el selector comienza con #, es un ID
  if (selector[0] === '.') return 'class'; // Si el selector comienza con ., es una clase
for( let i = 1; i < selector.length; i++){
  if(selector[i] ==='.') return 'tag.class'
}
    
  return 'tag'; // Si no coincide con ninguno de los patrones anteriores, es un tipo de tag simple
};


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

//2
var matchFunctionMaker = function (selector) {
  // $(".pagetitle")
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    // Devuelve una función que verifica si el elemento tiene el mismo ID
    // que el selector
    matchFunction = (element) => `#${element.id}` === selector;
    // retorna un true || false
  } else if (selectorType === "class") {
    matchFunction = (element) => {
      // []    ".pagetitle"
      for(let i = 0; i < element.classList.length; i++){
        if(`.${element.classList[i]}` === selector) return true
      } 
      return false
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => { 
    let [tag, clase] = selector.split('.'); // -> ["tag", "class"]
    let funClass = matchFunctionMaker(`.${clase}`)
    let funcTag = matchFunctionMaker(tag)  // -> (element) => element.tagName === selector.toUpperCase()
    return funClass(element) && funcTag(element)
    };
  } else if (selectorType === "tag") {
     // element.tagName --> DIV
    matchFunction = (element) => element.tagName === selector.toUpperCase()
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

 