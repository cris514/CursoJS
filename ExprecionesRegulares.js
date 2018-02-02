/*Las expresiones regulares son patrones
utilizados para encontrar una determinada combinación de
caracteres dentro de una cadena de texto. En JavaScript,
las expresiones regulares también son objetos. */

//Formas de declarar una exprecion regular.

//Forma 1.
var reg1 = RegExp("a");
//Forma 2.
var reg2 = /a/;

//Ejemplo
var texto = "Prueba";

var arr = texto.match( reg1 );
console.log( arr );
