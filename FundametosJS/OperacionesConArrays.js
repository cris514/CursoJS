// Operador Spread (...)
function suma(...numeros){
  var acum = 0
  for (var i = 0; i < numeros.length; i++) {
    acum += numeros[i]
  }
  return acum
}
suma(4,4,4,4)
