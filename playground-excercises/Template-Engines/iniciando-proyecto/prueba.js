let serie = [
    { nombre: "the mentalist", id: 1},
    { nombre: "lost", id: 2},
    { nombre: "TWD", id: 3}
];

let buscar = function(serieID){
    for (let i = 0; i < serie.length; i++) {
        if (serieID == serie[i].id) {
        return serie[i].nombre;
    }
}
}
console.log(buscar(3));

app.get ("/serie/:idSerie", function (req, res){
    res.send (function (idSerie){
        idSerie = req.params.idSerie;
        for (let i = 0; i < serie.length; i++) {
            if (idSerie == serie[i].id) {
                return serie[i].nombre;
            }
        }
    })
})