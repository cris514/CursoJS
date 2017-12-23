//Cap 23.
//Arreglos.
//[] hace referencia a un arreglo.
var arreglo =[
 //Declaracion de objeto anonimo.
//Posicion [0] del arreglo.
 {
   nombre: "cris",
   apellido:"Peraza"
 },
 //Declaracion de funcion anonima.
 //Posicion [1] del arreglo.
 function(){
   console.log("Impresion dentro del arreglo");
 },
 //Declaracion de segunda funcion anonima.
 //Posicion [2] del arreglo.
 function( persona ){
   console.log(persona.nombre +" "+ persona.apellido);

 }


];
//Los parametros del arreglo 0, los mandaremos al arreglo 2.
//Por que en nuesto arreglo 0 tenemos nombre y appellido.
arreglo[2](arreglo[0]);

//Impresiones
console.log(arreglo);
console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[0].nombre + " " + arreglo[0].apellido);

//Ejemplo
var arr = {
  true,
  {
    nombre:"Goku",
    apellido"sayajin"
  },
  function(){
    console.log("soy sayajin dios");
  },
  function(guerrero){
    console.log(guerrero.nombre +" "+ guerrero.apellido);
  },
}
