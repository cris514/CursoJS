//Tomar fecha actual
var hoy = new Date();
console.log( hoy );

//Fecha en milisegundos.
var fmili = new Date(0);
console.log(fmili);

//Uso de metodos get
//getFullYear regresa el año en el que estamos.
console.log(hoy.getFullYear());
//Optener el mes.(Inicia en 0, los meses son un arreglo).
console.log(hoy.getMonth());
//Optener el dia.
console.log(hoy.getDate());
//Optener las horas.
console.log(hoy.getHours());
//Optener las minutos.
console.log(hoy.getMinutes());
//Optener las segundos.
console.log(hoy.getSeconds());
//Optener los milisegundos
console.log(hoy.getMilliseconds());

//Reprecentacion numerica en milisegundos de una fecha.
//Utilizado para ver cuanto tiempo demora un procedo en ejecutarse.
console.log(hoy.getTime());

//Ejemplo

  var inicio = new Date();

  for (var i = 0; i < 15000; i++) {
    console.log("Procesando");
}

  var fin = new Date();
  //La variable fin, es detectada despues de que termina el for.
  //Por eso al aplicar la resta, detecta los tiempos en que se inicio y termino, cada proceso.

  var duracion = fin.getTime() - inicio.getTime();

  console.log(duracion, "milisegundos");
  console.log(duracion/1000, "Segundos");

  //Paguina para trabajar mas con fechas
  //https://momentjs.com/
