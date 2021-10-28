window.onload = () => {
  const main = document.querySelector("main");
  const subtitle = document.querySelector(".subtitulo");
  const anchor = document.querySelector("h2 a");
  const paragraphs = document.querySelectorAll("p");

  let guestName = prompt("Ingrese su nombre:");
  if (!guestName) {
    guestName = "Invitado";
  }
  subtitle.innerHTML += ` ${guestName}`;
  subtitle.style.textTransform = "uppercase";

  anchor.style.color = "#E51B3E";

  if (confirm("¿Desea colocar un fondo de pantalla?")) {
    document.querySelector("body").classList.add("fondo");
  }

  paragraphs.forEach((p, i) => {
    if (i % 2 == 0) {
      p.classList.add("destacadoPar");
    } else {
      p.classList.add("destacadoImpar");
    }
  });

  main.style.display = "block";
};
