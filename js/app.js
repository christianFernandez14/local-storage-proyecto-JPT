// Variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListener();

// Los Eventos
function eventListener() {
  formulario.addEventListener('submit', agregarTweet);

  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    crearHTML();
  })
}

// Funciones
function agregarTweet(event) {
  event.preventDefault();

  const tweet = document.querySelector('#tweet').value;

  if (tweet === '') {
    mostrarError('Un mensaje no puede ir vacio');
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet
  }

  tweets = [...tweets, tweetObj]
  crearHTML();
  formulario.reset();

}

function mostrarError(error) {
  const contenedor = document.querySelector('#contenido');
  const mensajeError = document.createElement('P');

  mensajeError.classList.add('error')
  mensajeError.textContent = error;
  contenedor.appendChild(mensajeError);

  setTimeout(() => {
    mensajeError.remove()
  }, 2000);
}

function crearHTML() {
  LimpiarHTML();

  if (tweets.length > 0) {

    tweets.forEach(x => {
      const { tweet, id } = x;

      // Agregando Btn para eliminar
      const btnEliminar = document.createElement('a');
      // Revisa esta clase en custom del css
      btnEliminar.classList.add('borrar-tweet');
      btnEliminar.textContent = 'X'

      // Añadimos la funcion de eliminar: Este evento lo hacemos como de 
      btnEliminar.onclick = function () {
        borrarTweet(id);
      }


      const li = document.createElement('li');
      li.innerText = tweet;

      // Asignamos el btn a cada uno de los tweet
      li.appendChild(btnEliminar);


      contenedorTweets.appendChild(li);

    });
  }
  sincronizarStorage();
}


function sincronizarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Borrando un tweet
function borrarTweet(id) {
  // console.log('borrando...', id); // viendo que esta tomando referencia al tweet que quiero eliminar

  // Filtramos los elementos y me traiga todos menos el que se le dío click
  tweets = tweets.filter(tweet => (tweet.id !== id))

  console.log(tweets);

  // Aca debemos mostrarlo de nuevo
  crearHTML();

}

function LimpiarHTML() {
  while (contenedorTweets.firstChild) {
    contenedorTweets.removeChild(contenedorTweets.firstChild)
  }
}


/** 
 * *Comentarios extras
 * 
 * 1.- Como toda app web debemos interactuar con ella, trabajemos con la acción de eliminar un tweet espeficco.
 * 
 * 2.- La mejor opcion para ellos es utilizar un filter que estara asociada a un evento del boton eliminar, mismo boton creado de manera local, cada vez que agregues un tweet
 *  
 */