var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
   if (typeof selector !== 'string') {
    return 'No es un selector válido'; // Si el selector no es una cadena, devuelve un mensaje de error
  }

  // Elimina espacios en blanco al inicio y final del selector
  selector = selector.trim();

  if (selector[0] === '#') {
    return 'id'; // Si el selector comienza con #, es un ID
  } else if (selector[0] === '.') {
    return 'class'; // Si el selector comienza con ., es una clase
  } else if (selector.includes('.')) {
    const parts = selector.split('.');
    if (parts.length === 2 && parts[0] !== '') {
      return 'tag.class'; // Si hay un solo punto y la primera parte no está vacía, es del tipo tag.class
    }
  }

  return 'tag'; // Si no coincide con ninguno de los patrones anteriores, es un tipo de tag simple
};

// Ejemplos de uso:
//  console.log(selectorTypeMatcher('#miId')); 
//  console.log(selectorTypeMatcher('.miClase')); 
// console.log(selectorTypeMatcher('div.miClase')); 
// console.log(selectorTypeMatcher('div')); 
// console.log(selectorTypeMatcher(123)); 


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
  } else if (selectorType === "class") {
  } else if (selectorType === "tag.class") {
  } else if (selectorType === "tag") {
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
