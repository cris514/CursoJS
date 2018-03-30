
class Toggable {
  //el  es el elemento.
  constructor(el){
    // Inicializar el estado interno.
    this.el = el
    this.el.innerHTML = 'off'
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.el.addEventListener('click', this.onClick)
  }

  onClick(ev){
    console.log('hola',this);
   // Cambiar estado Interno
   this.activated = !this.activated
   // Llamar a ToggleText
   this.ToggleText()

  }

  ToggleText(){
    //Cambiar texto.
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
