

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
const despertar = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Me estoy muriendo...')
  },DESPERTAR)
})

// Que hacer si todo esta bien.
// message es el parametro que biene de resolve('Me estoy duchando...')
despertar.then((message) => {
  console.log(message);
})
// Que hacer si todo esta mal.
despertar.catch((message) => {
  console.log(message);
})
