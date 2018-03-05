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
  return traduccion
}
console.log(idioma("Programar")) //Promgram
console.log(idioma("Zorro"))     //Zorrope
