//Funciones Especiales
//Call(),Apply() y Bin().

var carro = {
    color: "Rojo",
    marca: "VW",
    imprimir:function(){
      var salida = this.marca + " - " + this.color;
      return salida;
    }
  }
  console.log(carro.imprimir());
