

const $cancelButton = document.getElementById('cancel-button');


const timeout = setTimeout (() => {
alert ('han pasado 5 segundos')
}, 5000)

// $cancelButton.addEventListener('que evento?', que hago?)
$cancelButton.addEventListener('click', ()=> {
  clearTimeout(timeout)//Limpiar mi timeout.
})
