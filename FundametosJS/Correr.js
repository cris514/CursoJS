const  nombre = "cris"
const dias = [
"lunes",
"martes",
"miercoles",
"jueves",
"Viernes",
"Sabado",
"Domingo"
]

//Acomulador
function correr() {
  const min = 5
  const max = 10
// Math.round Redondea para abajo y arriba, dependiendo cual esta mas cercas.
// Math.random Devuelve un valor entre el 0 y el 1.
  return Math.round(Math.random() * (max - min)) + min

}

let totalKms = 0
const longitud = dias.length
for (let i = 0; i < longitud; i++) {
  const kms = correr()
  totalKms = totalKms + kms
  console.log(`El dia ${dias[i]} ${nombre} corrio ${kms}kms`);
}
const promediokms = totalKms / longitud
// toFixed(2) Numeros despues del punto.
console.log(`En promedio ${nombre} corrio ${promediokms.toFixed(2)}kms`);
