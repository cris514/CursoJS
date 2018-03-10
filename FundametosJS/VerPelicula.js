

const pelicula = `The Black Panther`
//Minimo de edad para verla.
const MinimoEdad = 14

//Personas
const nombreCris = "cris"
const edadCris = 22

const nombreEd = "Ed"  
const edadEd = 13

function restriccionEdad (nombre,edad, acompañadoAdulto = false ){
  if (edad >= MinimoEdad ) {
    alert(`${nombre} Puede ir a ver ${pelicula}`)

  }else if (acompañadoAdulto = true) {
    alert(`${nombre} Puede ir a ver ${pelicula} con el adulto.`)

  } else {
    alert(`${nombre} No puede ir a ver ${pelicula}.
      Tiene ${edad}  años y necesita tener minimo ${MinimoEdad }  `)

  }
}

restriccionEdad(nombreCris, edadCris)
//true hace referencia a el tercer parametro (acompañadoAdulto)
restriccionEdad(nombreEd, edadEd, true)
