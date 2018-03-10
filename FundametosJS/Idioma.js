//Generar un idioma inventado.
function idioma(str){
  let traduccion = str

  //Si la palabra termina en "ar", se eliminaran esos dos caracteres.
  //toLowerCase, combierte en minusculas.
  //endsWith, permite espesificar que termine con ciertos caracteres.
  if (str.toLowerCase().endsWith("ar")) {
    //slice, permite cortar caracteres, desde donde a donde. 0 es el principio. -2 son los dos ultimos.
    traduccion = str.slice(0,-2)
  }
  //Si la palabra inicia con z, se le añade "pe" al final
  //startsWith, permite espesificar si inicia con ciertos caracteres.
  if (str.toLowerCase().startsWith("z")) {
      //forma 1  de escribir la igualacion
      //traduccion = traduccion + "pe"
      //forma 2
      traduccion += "pe"
    }
// Si la palabra traducida tien 10 o mas letras
// Se debe partir a la mitad y unir ccon un guion del medio.
const longuitud = traduccion.length
if (longuitud >= 10 ) {
  // Particion desde el inicio a la mitad. 
  // Math.round, dedondea el valor de la division.
  const primerMitad = traduccion.slice(0, Math.round(longuitud / 2))
    // Particion desde la mitad al final.
  const segundaMitad = traduccion.slice(Math.round(longuitud / 2))
  traduccion = `${primerMitad}-${segundaMitad}`
}

// Sila palabra original es un palindromo.
//Ninguna de las reglas anteriores se aplican.
//La misma palabra se intercala entre mayusculas y minisculas.

const reverse = (str) => str.split("").reverse().join("")

function minMay(str){
  const longuitud = str.longuitud
  let traduccion = ""
  let ponerMayusculas = true
  for (let i = 0; i < longuitud; i++) {
    const caracteres = str.charAt(i)
    traduccion += ponerMayusculas ? caracteres.toUpperCase() : caracteres.toLowerCase()
    ponerMayusculas = !ponerMayusculas
  }
  return traduccion
}


if (str == reverse(str)) {
  return minMay(str)
}


  return traduccion
}
console.log(idioma("Programar")) //Promgram
console.log(idioma("Zorro"))     //Zorrope
console.log(idioma("abecedario")); //abece-dario
console.log("sometemos");
