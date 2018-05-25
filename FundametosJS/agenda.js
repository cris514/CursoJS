
const DESPERTAR = 3000;
const DUCHA = 2000;
const VESTIRSE = 2000;
const DESAYUNAR = 2000;
const ESTUDIAR = 5000;


const $agenda = document.getElementById('agenda');

// Si la promesa se cumple se ejecuta la
// primera funcion.
// si no se cumple se ejecuta la segunda funcion.
// resolve (Todo bien).
// reject (Todo mal).
// const despertar = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Me estoy muriendo...')
//   },DESPERTAR)
// })
//
// // Que hacer si todo esta bien.
// // message es el parametro que biene de resolve('Me estoy duchando...')
// despertar.then((message) => {
//   console.log(message);
// })
// // Que hacer si todo esta mal.
// despertar.catch((message) => {
//   console.log(message);
// })

function despertar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Me estoy ...')
    },DESPERTAR)
  });
}

function ducha(message) {
  //Cambiando el contenido del texto
  // message parametro que biene del resolve de despertar.
  $agenda.textContent = message;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Me estoy despertando...')
    },DUCHA)
  });
}

function vestirme(message) {
  $agenda.textContent = message;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('estoy desayunando...')
    },VESTIRSE)
  });
}

function desayunar(message) {
  $agenda.textContent = message;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('no hay comida...')
    },DESAYUNAR)
  });
}
function error(message) {
  $agenda.style.color = 'red';
  $agenda.textContent = message;
}

despertar()
.then(ducha)
.then(vestirme)
.then(desayunar)
// Mensaje de error
.catch(error)
