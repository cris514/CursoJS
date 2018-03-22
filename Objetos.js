//Cap 11.
//Creacion de un Objeto.
//Un objeto contiene varios atributos.
//Se puede crear objetos dentro de objetos, ilimitadamente.
//La coma en edad despues del 22 permanese, para dar pie a la Creacion del siguiente objeto, dentro del objeto persona.
var persona = {
  nombre: "cristopher",
  apellido: "pe",
  edad: 22,
  direccion:{
    pais: "mexico",
    ciudad: "ensenada",
  edificio:{
    nombre:"Edificio A",
    telefono:"11212323"
    }
  }

}
// // Imprimir Objetos.
// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.direccion.ciudad);


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
