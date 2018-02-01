//Funcion para sumar y restar fechas.
var fecha = new Date();//Fecha actual.
console.log(fecha);

//Modificacion al prototype para fechas.
Date.prototype.sumarDias = function (dias) {
  this.setDate( this.getDate() + dias);
  return this;
};

//En fecha.sumarDias("NUMERO DE DIAS")
//Ponemos la cantidad de dias que pasamos como parametro
//para la funcion sumar dias.
console.log(fecha.sumarDias(14));//Podemos usar negativos para restar la cantidad.



//Modificacion al prototype para Años.
Date.prototype.sumarAños= function (años) {
  this.setFullYear( this.getFullYear() + años);
  return this;
};

console.log(fecha.sumarAños(2));
