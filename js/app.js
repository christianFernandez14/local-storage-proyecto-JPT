// Variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets');
let tweet = []; // donde se guardara cada tweet

// console.log(contenedorTweets); // corroboro que estoy aputando al selector correcto.

eventListener();
// Los Eventos

function eventListener() {
  formulario.addEventListener('submit', agregarTweet);
}



// Funciones
function agregarTweet(event) {
  event.preventDefault();

  console.log('Se agrego un tweet..');  // corroboramos que se llama a la funcion
}


/** 
 * *Comentarios extras
 * 
 * 1.- Visto el HTML, nos damos cuentas que hay dos elementos importante en la resolucion de lo que me piden, que es el formulario y  obviamente donde se posicionaran cada tweet, tambien forma parte de estos selectores.
 * 
 * 2.- Luego de corroborar que estamos apuntado a los selectores correctos, nos disponemos cargar todos los eventos en un sola función y llamarla.
 *  
 */