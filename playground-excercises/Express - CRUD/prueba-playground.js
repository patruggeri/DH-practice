let celulares = [
  {
    id: 1,
    nombre: "Motorola Moto E6 Plus",
    precio: 14999,
  },
  {
    id: 2,
    nombre: "Motorola Moto G7",
    precio: 19999,
  },
  {
    id: 3,
    nombre: "Alcatel 5033A",
    precio: 6999,
  },
  {
    id: 4,
    nombre: "Samsung Galaxy A50",
    precio: 33499,
  },
];

router.delete("/celular/:idCelu", (req, res) => {
  let celularesUpdated = celulares.filter((celu) => {
    return celu.id != req.params.idCelu;
  });
  res.send(celularesUpdated);
});

router.delete("/celular/:idCelu", (req, res) => {
  let index = celulares.findIndex((elem) => {
    if (elem.id == req.params.idCelu) {
      return true;
    }
  });
  let celuEliminado = celulares.splice(index, 1);
  res.send(celuEliminado);
});
