



//Cap 18.
function Jugador(nombre){
  this.nombre = nombre;
  this.pv = 100;
  this.sp = 100;

  this.curar = function(jugadorObjetivo){
    if (this.sp >= 40){
        this.sp -=40;
        jugadorObjetivo.pv +=20;
    }else {
      console.log(this.nombre + "no tienes sp");
    }
    this.estado(jugadorObjetivo);
  }
ths.tirarFlecha = function(jugadorObjetivo){
  if (jugadorObjetivo.pv > 40) {
    jugadorObjetivo.pv -= 40;
  }else {
    jugadorObjetivo.pv = 0;
    console.error(jugadorObjetivo.nombre + "Murio!!");
  }
  this.estado(jugadorObjetivo);
}
this.estado = funcion(jugadorObjetivo){
  console.log(this);
  console.log(jugadorObjetivo);
}
};

var gandalf = new Jugador("gandalf");
var legolas = new Jugador("legolas");

gandalf.curar(legolas);
