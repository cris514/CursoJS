
function saludarFamilia(apellido){
  return function saludarMiembro (nombre) {
    console.log(`hola ${nombre} ${apellido}`);
  }
}

const saludarRomero = saludarFamilia('Romero')
const saludarPerez = saludarFamilia('Perez')

saludarRomero('Gorge')
saludarRomero('Alejandra')

saludarPerez('toño')
saludarPerez('Gera')


function prefijoRe(palabra){
  const prefijo = ('Re')
  console.log(`${prefijo}${palabra}`);
}
prefijoRe('Bueno')
prefijoRe('Malo')
