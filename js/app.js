// Variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListener();

// Los Eventos
function eventListener() {
  formulario.addEventListener('submit', agregarTweet);

  // Cuando el documento esta listo
  document.addEventListener('DOMContentLoaded', () => {
    // La manera de obetener los datos
    tweets = JSON.parse(localStorage.getItem('tweets')) || []; // haz la prueba antes de cargar datos y busca en la pestaña de Application el local storage

    console.log(tweets); // viendo que hay en el array

    // Si hay o no elementos, debemos llamar la funcion
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

  if (tweets.length > 0) {
    LimpiarHTML();

    tweets.forEach(x => {
      const { tweet } = x;
      const li = document.createElement('li');
      li.innerText = tweet;
      contenedorTweets.appendChild(li);

    });
  }

  // Agrega los tweets actuales al Storage
  sincronizarStorage();
}


function sincronizarStorage() {
  // console.log('Pal Storage...');

  localStorage.setItem('tweets', JSON.stringify(tweets))
}

function LimpiarHTML() {
  while (contenedorTweets.firstChild) {
    contenedorTweets.removeChild(contenedorTweets.firstChild)
  }
}


/** 
 * *Comentarios extras
 * 
 * 1.- Antes de seguir, podemos optimizar un poco el codigo, especificamente en la parte de como conformamos el objeto, ya que puedes asignar el valor a una propiedad, siempre y cuando se llame igual a la variable donde esta reservado en este caso el tweet.
 * 
 * 2.- Bueno la idea del proyecto, es almacenar los datos en LocalStorage y el mejor lugar, es luego se muestre en el HTML
 * 
 * 3.- Y para que siempre lo veas, a pesar de recargues la pagina; lo cargamos a un evento para cuando el HTML este cargo en su totalidad.
 * 
 * 4.- Importante que al momento de cargar el evento de cuando el HTML esta listo (DOMContentLoaded), es que debemos ser consistente con la obtecion de lo datos desde el Local Storage y esto es por que la primera vez que se carga no hay datos, por lo tanto al Local Storage tambien debemos inicializarlo como un array (para este caso) vacio.
 *  
 */