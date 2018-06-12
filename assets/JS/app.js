/*Versión 0.0.1
    Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
    Agregar un evento de click al botón o de submit al formulario.
    En el evento, obtener el texto.
    Agregar el texto al HTML.*/

//boton     
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  //guarda texto
  let tweetIn = document.getElementById('tweet').value;
  //limpia area de texto
  document.getElementById('tweet').value = ' ';
  //contenedor de tweets
  const cTweet = document.getElementById(contTweet);
  //div contenedor de tweets
  const newTweets = document.createElement('div')
 
//nodo tweet
let tweets = document.createTextNode(tweetIn);
const contElement = document.createElement('p');
contElement.appendChild(tweets);
newTweets.appendChild(tweets);

contTweet.appendChild(newTweets);

});

