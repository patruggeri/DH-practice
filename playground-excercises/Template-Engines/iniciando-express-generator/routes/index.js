var express = require('express');
var router = express.Router();

const dishes = [
  {
    title: "Carpaccio fresco",
    desc: "Entrada Carpaccio de salmón con cítricos",
    price: "U$S 65.50",
    img: "/images/Carpaccio-de-salmon.jpg",
    id: 1
  },
  {
    title: "Risotto de berenjena",
    desc: "Risotto de berenjena y queso de cabra",
    img: "/images/Risotto-berenjena-queso-cabra.jpg",
    price: "U$S 47.00",
    id: 2
  },
  {
    title: "Mousse de arroz",
    desc: "Mousse de arroz con leche y aroma de azahar",
    price: "U$S 27.50",
    img: "/images/Mousse-de-arroz-con-leche.jpg",
    id: 3
  },
  {
    title: "Espárragos blancos",
    desc: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: "U$S 37.50",
    img: "/images/esparragos.png",
    id: 4
  }
]
       

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dishes: dishes });
});

router.get('/detalle-menu', function (req, res, next) {
  res.render('detalle-menu', { title: 'Express' });
});

module.exports = router;
