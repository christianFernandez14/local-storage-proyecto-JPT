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
      const btnEliminar = document.createElement('a');
      btnEliminar.classList.add('borrar-tweet');
      btnEliminar.textContent = 'X'

      btnEliminar.onclick = function () {
        borrarTweet(id);

      }

      const li = document.createElement('li');
      li.innerText = tweet;
      li.appendChild(btnEliminar);
      contenedorTweets.appendChild(li);

    });
  }
  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

function borrarTweet(id) {
  tweets = tweets.filter(tweet => (tweet.id !== id))
  crearHTML();

}

function LimpiarHTML() {
  while (contenedorTweets.firstChild) {
    contenedorTweets.removeChild(contenedorTweets.firstChild)
  }
}

