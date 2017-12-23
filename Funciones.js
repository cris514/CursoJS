//Cap 12.
//Funciones.
//Siempre regresan un valor.
function primeraFuncion(){
  var a = 220;
  console.log( a );
}
//este es el que llama a la función.
primeraFuncion();


//Ejemplo
//Enviar saludo con nombre de la persona.
       function saludo ( nombre ) {
         console.log(" hola " + nombre);
         }
saludo("cris");
/*
Definimos nuestra función llamada saludo y recibe el parámetro nombre: function saludo(nombre){
A la hora de imprimir document.write(" hola " + nombre);
Imprimira hola y el nombre que le pasemos a la función, para pasar el nombre a la función se hace lo siguiente.
saludo("cris”);
-Aqui decimos que  “cris” sera el valor que estará dentro de function saludo(nombre){
-Así al momento de mandar a imprimir document.write(" -hola " + nombre); La función ya tendrá asignado el valor cris.
saludo("cris"); Es una variable anonima.
*/
//Ejemplo 2
function imprimir(nombre, apellido){
  apellido = apellido || "No ingreso apellido"
  console.log(nombre +" "+apellido);
}
imprimir("cris");
//Si se ingresa un apellido aparecera, si no se ingresa aparecera "No ingreso apellido".

function imprimir2(nombre, apellido){
  apellido = apellido || "No ingreso apellido"
  console.log(nombre +" "+apellido);
}
imprimir2("cris", "peraza");
//Aqui como ya se ingreso un apellido si aparece.


//Cap 14.
//Retorno de Funciones
function obtenerNombre(){
  return "cris";
}
var nombre = obtenerNombre();
console.log(nombre);

//Ejemplo
function crearPersona(nombre, apellido){
//El primero es el nombre de la propiedad y el segundo es el valor que tiene.
//Esto regresa el valor de un objeto, el cual tiene las propiedades de nombre y apellido.
  return{
    nombre: nombre,
    apellido: apellido
  }
}
var persona = crearPersona("obama", "barack");
console.log(persona.nombre);
console.log(persona.apellido);

//Ejemplo funciones que regresan Funciones
function creaFuncion(){
  return function(){
    console.log("Me crearon!");
  }
}

var nuevaFuncion = creaFuncion();
nuevaFuncion;
