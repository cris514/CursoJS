const persona = {
  nombre: 'Tony',
  apellido: 'stark'
}

function saludar(veces, uppercase){

  for (let i = 0; i < veces; i++) {
    let str = `Hola ${this.nombre} ${this.apellido}`
    str = uppercase ? str.toUpperCase() : str
    for (let i = 0; i < veces; i++) {
      console.log(str);
    }
  }
}

saludar.call(persona,3)
