
// Mi fecha
const nacimiento = new Date(1996, 1, 15)
console.log(nacimiento);
// Fecha de hoy
const hoy = new Date()
console.log(hoy);

/*
const tiempo = hoy - nacimiento
console.log(tiempo);
// Segundos
const tiempoSegundos = tiempo / 1000
console.log(tiempoSegundos);
// Minutos
const tiempoMin = tiempoSegundos / 60
console.log(tiempoMin);
// Horas
const tiempoHoras = tiempoMin / 60
console.log(tiempoHoras);
*/

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]

const mes = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
]

// proximo Cumpleaños
const proximocumple = new Date(hoy.getFullYear(), nacimiento.getMonth())
console.log(` siguiente cumpleaños: ${proximocumple}`);

// Dia siguiente cumpleños
console.log(`${diasSemana[proximocumple.getDay()]}, ${mes[proximocumple.getMonth()]}`);
