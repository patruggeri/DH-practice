window.onload = () => {
  const body = document.querySelector("body");
  const title = document.querySelector("h1");

  if (confirm("Desea modo oscuro?")) {
    body.style.backgroundColor = "#141d26";
    body.classList.add("fondoMoviesList");
  }

  title.innerHTML += "LISTADO DE PELÍCULAS";
  title.style.color = "white";
  title.style.backgroundColor = "teal";
  title.style.padding = "20px";
  title.style.textAlign = "center";

  /* Tambien podemos hacer lo siguiente:
  title.style = {
    ...title.style,
    textTransform: "uppercase",
    color: "white",
    padding: "20px",
  };
*/
};
