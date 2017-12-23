//Notacion de puntos
//Esta es la ruta para obtener el valor espesifico, de un objeto dento de otro.
//Consultar el pais del objeto direccion
console.log(persona.direccion.pais);
//Consultar el nombre del objeto edificio
console.log(persona.direccion.edificio.nombre);
//Todos los objetos son pasados por referencia.
//De esta manera podemos asignar un nueva propiedad dentro de un objeto en espesifico.
var edificio = persona.direccion.edificio;
edificio.numpiso = "piso 2";
console.log(persona);

//Notacion de Corchete.
//Utiliada cuado necesitamos traer datos de manera dinamica.
var campo ="edad";
console.log(persona["campo"]);
