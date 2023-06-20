
const textopublicar = document.getElementById('texto-publicacion');
const textoPublicarAmigos = document.getElementById('texto-publicacion-amigos');
const form = document.getElementById('Publicacion-form');
const formAmigos = document.getElementById('Publicacion-Amigos-form');
const div = document.getElementById('resultado-div');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const textoApublicar = textopublicar.value;

  div.innerHTML = "<p>" + textoApublicar + "</p>";
});

formAmigos.addEventListener("submit", (event) => {
  event.preventDefault();

  const textoApublicarAmigos = textoPublicarAmigos.value;

  div.innerHTML = "<p>" + "Solo Para Amigos" + textoApublicarAmigos + "</p>";
});
