//Los String en javaScript son objetos.

//Formas de definirlos
//var b = "hola";
//var a = new String("hola");

var a = "hola";

  console.log(a.toUpperCase());//toUpperCase(), permite imprimir en mayusculas.
  console.log(a.toLowerCase());//toLowerCase(), permite imprimir en minusculas.

//Encontrar posicion de una letra o bloque de varias letras(palabras).
var b = "jiren";

var j = b.indexOf("n");//Buscamos n.
  console.log("La letra esta en la posicion: ",j);

//Encontrar posicion de letra repetida.
var c = "posicion"

var d = c.lastIndexOf("i");//Buscamos la ultima i.
  console.log("La letra esta en la posicion: ",d);
