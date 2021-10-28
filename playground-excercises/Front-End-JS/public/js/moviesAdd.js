window.onload = () => {
  const title = document.querySelector("h1");
  const section = document.querySelector("#formulario");
  const article = document.querySelector("article");

  title.innerHTML += "AGREGAR PELÍCULAS";
  title.classList.add("titulo");

  section.classList.add("fondoCRUD");

  article.classList.add("fondoTransparente");
};
