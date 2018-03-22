var nombre = "iron man"

function saludar(){
  // Javascript sube a la primera linea de la funcion las variables,
  // definidad con var.
  var nombre = "black panther"
  // Toma el valor del scope dentro de la funcion.
  console.log(`hola ${nombre}`);
}

saludar()
// Toma el valor del scope global.
  console.log(`la variable tiene el valor ${nombre}`);

// Ejemplo 2
function saludar10(nombre2){
  for (var i = 0; i < 10; i++) {
  console.log(`hola ${nombre2}`);
  }
  console.log(`El valor de i es: ${i}`);
}
saludar10("spider-man")
