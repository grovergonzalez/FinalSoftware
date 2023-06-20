
const textopublicar = document.getElementById('texto-publicacion');
const form = document.getElementById('Publicacion-form');
const div = document.getElementById('resultado-div');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const textoApublicar = textopublicar.value;

  div.innerHTML = "<p>" + textoApublicar + "</p>";
});
