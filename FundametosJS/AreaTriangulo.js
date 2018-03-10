//Obtener datos del Usuario.
//prompt permite insertarle datos, funciona igual que un alert.
var Userbase = prompt("Inserta el valor de la (base) del triangulo:");

var Useraltura = prompt("Inserta el valor de la (Altura) del triangulo:");

//Almacenando datos que dio el usuario.
let base = (Userbase);
let altura = (Useraltura);

//Creacion de funcion flecha, asignandola a una variable.
let areaTriangulo = (base, altura) => {
  return base * altura / 2

} 

// Con comilla invertida ``, no hace falta concatenar y permite incluir codigo dentro del string.
document.write(`El area de un triangulo de base:${base}
   y altura de:${altura} es igual a:${areaTriangulo(base, altura)}` );
