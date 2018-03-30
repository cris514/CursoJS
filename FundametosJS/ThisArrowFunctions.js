class Persona{
  constructor(nombre, amigos = []){
    this.nombre = nombre
    this.amigos = amigos
  }
  //Metodo
  listarAmigos(){
    //Al utilizar una Arrow Functions,
    //This toma el valor de this des de fuera del contexto,
    // no necesitas igualar el this de nuevo.
    this.amigos.forEach((amigo) => {
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
    })
  }
}

const cris = new Persona("cris",["Omedo","meño","tierna"])

cris.listarAmigos()
