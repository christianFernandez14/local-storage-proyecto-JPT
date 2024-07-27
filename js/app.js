// Variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets');
let tweet = []; // donde se guardara cada tweet

eventListener();

// Los Eventos
function eventListener() {
  formulario.addEventListener('submit', agregarTweet);
}

// Funciones
function agregarTweet(event) {
  event.preventDefault();

  // Textarea, donde usuario escribe
  const tweet = document.querySelector('#tweet').value;

  // Validamos
  if (tweet === '') {
    console.log('No puede eviarse vacio...');

    mostrarError('Un mensaje no puede ir vacio');

    return; // recuerda que debes prevenir que siga ejecutandose en caso que entre aca
  }

  console.log(tweet, typeof tweet);

}

function mostrarError(error) {
  const mensajeError = document.createElement('P');
  mensajeError.classList.add('error')
  mensajeError.textContent = error;

  // Insertamos el error en el HTML
  const contenedor = document.querySelector('#contenido');
  contenedor.appendChild(mensajeError);

  // Eliminamos la alerta luego de 2 seg.
  setTimeout(() => {
    mensajeError.remove()
  }, 2000);


}


/** 
 * *Comentarios extras
 * 
 * 1.- Tomaremos el valor que el usuario vaya colocando en el textarea y esa valor lo vamos ir almacenando el una variable local
 * 
 * 2.- La idea siempre es validar que haya algo en el formulario al momento de enviarlo, y esa validacion al entrar de en ella tambien debes asegurarte que no continue con el codigo.
 * 
 * 3.- Llegamos al momento de logica y es momento de separarla de la función actual y hacerlo en otra función.
 * 
 * 4.- En esta función de mostrar un error, creamos un elementos, incluimos clases para el aspecto visual, y creamos un variable local, para tomarla como referencia al momento de inyectar este error para cuando se ejecute.
 *  
 */