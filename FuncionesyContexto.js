//Funcion que crea funciones e imprimen el numero que estan en su contexto.

function crearFunciones(){

  var arr = [];
  var numero = 1;

//Push, permite meter una funcion dentro de un arreglo.

  arr.push(
    (function(numero){
      return function(){
        console.log(numero);
      }
    })(numero)
  );



  numero = 2;

  arr.push(
    (function(numero){
      return function(){
        console.log(numero);
      }
    })(numero)
  );



    numero = 3;

    arr.push(
      (function(numero){
        return function(){
          console.log(numero);
        }
      })(numero)
    );



  return arr;

}

var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
