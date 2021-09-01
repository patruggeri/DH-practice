let autos = require("./autos.js");

console.log(autos);

const concesionaria = {
    autos: autos,                                   // ETAPA 1
    buscarAuto: function (patente) {                // ETAPA 2
        for(i=0; i < autos.length; i++){
            if(autos[i].patente == patente){
                return this.autos[i];
            } 
        } return null;
    },
    venderAuto: function (patente){                 // ETAPA 3
        if(this.buscarAuto(patente) != null){
            autos[i].vendido = true;
        };
    },
    autosParaLaVenta: function () {                 // FUNCIONALIDAD EXTRA
        let autosParaVender = this.autos.filter(function(auto){
            return auto.vendido == false;
        })
        return autosParaVender;
    },
    autosNuevos: function () {                      // OTRA FUNCIONALIDAD EXTRA
        let autosParaVender = this.autosParaLaVenta();
        let autos0km = autosParaVender.filter(function(auto){
            return auto.km < 100;
        })
        return autos0km;
    },
    listaDeVentas: function () {                    // MAS FUNCIONALIDADES
        let listaVentas = [];
        let autosVendidos = this.autos.filter(function(auto){
            return auto.vendido == true; 
        }) // Tengo los autos vendidos, faltaria recorrer la lista y tomar los precios
        autosVendidos.forEach(function(vendidos){
            listaVentas.push(vendidos.precio)
        })
        return listaVentas;
    },
    totalDeVentas: function () {                    // TOTAL DE VENTAS
        let lista = this.listaDeVentas();
        let totalVentas = lista.reduce(function(acum, precio){
            return acum + precio;
        }, 0)
        return totalVentas;
    },
    puedeComprar: function (auto, persona) {        // AGREGANDO FUNCIONALIDADES (1)
        if (auto.precio <= persona.capacidadDePagoTotal && 
            (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas){
                return true;
            } else {
                return false;
            };
    // Puedo obviar el if, ya que el return de la condicion ya arroja TRUE o FALSE. 
    },
    autosQuePuedeComprar: function (persona) {      // AGREGANDO FUNCIONALIDADES (2)
        let disponibles = this.autosParaLaVenta();
        let lista = [];
        for (i=0; i<disponibles.length; i++){
            if (this.puedeComprar(disponibles[i], persona) == true){
                lista.push(disponibles[i]);
            }
        }
        return lista;
    }
    };

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
};


console.log("---------- ETAPA 2 ----------");
console.log(concesionaria.buscarAuto("APL123"));
console.log("---------- ETAPA 3 ----------");
concesionaria.venderAuto("APL123");
console.log("---------- PROBANDO NUEVA LISTA ----------");
console.log(autos);
console.log("---------- FUNCIONALIDAD EXTRA ----------");
console.log(concesionaria.autosParaLaVenta());
console.log("---------- OTRA FUNCIONALIDAD EXTRA ----------");
console.log(concesionaria.autosNuevos());
console.log("---------- MAS FNCIONALIDADES ----------");
console.log(concesionaria.listaDeVentas());
console.log("---------- TOTAL DE VENTAS ----------");
console.log(concesionaria.totalDeVentas());
console.log("---------- AGREGANDO FUNCIONALIDADES (1) ----------");
console.log(concesionaria.puedeComprar(autos[1], persona));
console.log("---------- AGREGANDO FUNCIONALIDADES (2) ----------");
console.log(concesionaria.autosQuePuedeComprar(persona));


