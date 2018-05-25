//setInterval (Que voy a hacer? , cada cuanto tiempo lo debo hacer?)

//setInterval(()=>{
//  document.write('ha pasado 2 segundos');
// }, 2000)


//Contador de tiempo en javascript
const tiempo = document.getElementById('tiempo');
let contador = 0;
const interval =  setInterval(() => {
  contador = contador + 1;
  tiempo.textContent = `Ha pasado ${contador} segundo`;
},1000)

const $cancelButton = document.getElementById('cancel-button');
$cancelButton.addEventListener('click', ()=> {
  clearInterval(interval)//Limpiarvinterval.
})
