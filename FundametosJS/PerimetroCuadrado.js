//Obtener datos del Usuario.
//prompt permite insertarle datos, funciona igual que un alert.
var UserL1 = prompt("Inserta el valor de un lado del cuadrado:");

let lado = (UserL1);

let perimetroCuadrado = (lado) => {
  return lado*4
}
/*       Forma normal 
function perimetroCuadrado (lado){
  return lado * 4
}
*/

// Con comilla invertida ``, no hace falta concatenar y permite incluir codigo dentro del string.
document.write(`El perimetro de un cuadrado de : ${lado}
   es igual a: ${perimetroCuadrado(lado)}` );
