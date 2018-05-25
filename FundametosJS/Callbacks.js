// setTimeout(function callback(){
//   console.log('ya paso 1 segundo');
// }, 3000)// Milisegundos.
//
// console.log('hola');


const despertar = 3000;
const ducha = 2000;
const vestirse = 2000;
const desayunar = 2000;
const estudio = 5000;


const $agenda = document.getElementById('agenda');
setTimeout(() => {
  //Cambiando el texo a la agenda
  $agenda.textContent = 'Ahora me ducho...';
  setTimeout(() => {
    //Cambiando el texo a la agenda
  $agenda.textContent = 'Ahora me visto...';
  setTimeout(() => {
    //Cambiando el texo a la agenda
  $agenda.textContent = 'Ahora desayuno';
  setTimeout(() => {
    //Cambiando el texo a la agenda
  $agenda.textContent = 'Ahora estudio';
  setTimeout(() => {
    //Cambiando el texo a la agenda
  $agenda.textContent = 'Termino mi dia';
  }, estudio)
  }, despertar)
  }, vestirse)
  }, ducha)
  }, despertar)
