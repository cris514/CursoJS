//Cap 16.
//Metodos y objetos
//this hace referencia al objeto y su contenido.
var persona ={
  nombre:"maria",
  apellido:"apec",
  imprimirNombre: function(){
    console.log(this.nombre + " " + this.apellido);
  }
};
//Aqui estoy cambiando la propiedad del nombre y el this.nombre como hace referencia al valor del nombre, lo detectara.
persona.nombre ="cris";

persona.imprimirNombre();
