


//Forma 1
// function Punto( x , y ){
//   this.x = x
//   this.y = y
// }
//
// Punto.prototype.moverEnX = function moverEnX(x) {
//   this.x += x
// }
// Punto.prototype.moverEnY = function moverEnY(y) {
//   this.y += y
// }
// // Metodo que calcula la distancio de un Punto
// // Con otro punto que le llega por parametro
// Punto.prototype.distancia = function distancia(p){
// // Distancio de este Punto
// // Menos el punto que pasan por parametro.
//  const x = this.x - p.x
//  const y = this.y - p.y
// // .sqrt Raiz cuadrada
//  return Math.sqrt(x * x + y * y)
// }

//Forma 2
// Objeto Punto
// const Punto = {
//   init: function init(x, y){
//     this.x = x
//     this.y = y
//   },
//   moverEnX: function moverEnX(x) {
//     this.x += x
//   },
//   moverEnY: function moverEnY(y) {
//     this.y += y
//   },
//   distancia: function distancia(p){
//     const x = this.x - p.x
//     const y = this.y - p.y
//
//     return Math.sqrt(x * x + y * y)
//   }
//
// }

// // Metodo que calcula la distancio de un Punto
// // Con otro punto que le llega por parametro
// Punto.prototype.distancia = function distancia(p){
// // Distancio de este Punto
// // Menos el punto que pasan por parametro.
//  const x = this.x - p.x
//  const y = this.y - p.y
// // .sqrt Raiz cuadrada
//  return Math.sqrt(x * x + y * y)
// }

 //Forma 3
 // Objeto Punto
 class Punto{
   constructor ( x , y ){
     this.x = x
     this.y = y
   }
   moverEnX(x){
    this.x += x
   }
   moverEnY(y){
    this.y += y
   }
   distancia(p){
     const x = this.x - p.x
     const y = this.y - p.y

     return Math.sqrt(x * x + y * y)
   }
 }
// Variables del objeto Punto.
// valores que se asignan al contructor.
const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)
// Este codigo es para la forma 2
// Asignando valores a variables del tipo punto.
// Se llama a init por que alli se asignan los valores de
// x,y dentro del obeto Punto.
// p1.init(0, 4)
// p2.init(3, 0)

// Imprimiendo valores de p1 y p2.
console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
// Pasando nuevos valores a p1 y p2.
p1.moverEnX(5)
p2.moverEnY(2)
console.log(p1.distancia(p2))
