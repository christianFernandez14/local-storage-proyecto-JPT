// Variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListener();

// Los Eventos
function eventListener() {
  formulario.addEventListener('submit', agregarTweet);
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
    tweet: tweet
  }

  // Una vez pasada la validación, añadimos el cada tweet

  tweets = [...tweets, tweetObj]

  console.log(tweets);

  // Mostramos en el HTML cada Tweet 
  crearHTML();

  // Reiniciamos el formulario
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
  // console.log('Mostrando tweet...');

  if (tweets.length > 0) {
    // Limpiamos el HTML para que no se repita la data
    LimpiarHTML(); // Si comentas esta linea veras el resultado

    tweets.forEach(x => {
      const { tweet } = x;
      // Creamos el HTML
      const li = document.createElement('li');

      // Añadimos el texto
      li.innerText = tweet;

      // Insertamos en el HTML
      contenedorTweets.appendChild(li);


    });
  }
}

// Limpiar el HTML
function LimpiarHTML() {
  while (contenedorTweets.firstChild) {
    contenedorTweets.removeChild(contenedorTweets.firstChild)
  }
}


/** 
 * *Comentarios extras
 * 
 * 1.- Una vez pasada la validación, debemos ir guardando lo que escribe el usuario en el array de tweet
 * 
 * 2.- En vez de agregar cada tweet en el array, colocaremos un objeto donde contenga el mesaje y un identificador unico, que lo traemos de Date.now().
 * 
 * 3.- Ya cada tweet en el array, debemos proceder a mostrarlo, como es logica de HTML, una vez más lo ideal es separlo en otra funcion.
 * 
 * 4.- En esta función crearHTML, validamos si hay algun elemento en el array, ahora te preguntaras, que la primera vez que la utlizamos ya nos aseguramos haya un elemento con la linea anterior, y esto se debe a que esta Fn crearHTML, la utlizaremos en otros lados y si o si debemos vericar que haya algo
 * 
 * 5.- Cuando estamo creanod el HTML que se mostrar, su ultima funcionalida es agreagrlos al HTML cierto ?, bueno como recordaras .appendChild; no borrar elementos previos, solo va incorporando, asi que optmizamos esta parte con una funcion que limpia la iteracio previa.
 * 
 * 6.- Viendo que cada vez que que igresamos un tweet, no se reinicia, usamos el metodo asociado a un formulario, como lo es reset.
 *  
 */