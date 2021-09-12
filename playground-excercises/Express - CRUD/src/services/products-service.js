const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsService = {
  products: products,

  filterByCategory(category) {
    const filteredProducts = products.filter((prod) => {
      return prod.category == category;
    });
    return filteredProducts;
  },

  findOneById(id) {
    const product = products.find((prod) => {
      return prod.id == id;
    });
    return product;
  },

  createOne(payload, image) {
    const lastProduct = products[products.length - 1];
    const biggestProdId = products.length > 0 ? lastProduct.id : 0;
    const product = {
      id: biggestProdId + 1,
      ...payload, // --> Este spread op. nos trae toda la info del body y la completa donde corresponde.
      price: Number(payload.price),
      discount: Number(payload.discount),
      image: image ? image.filename : "default-image.png",
    };
    products.push(product);
    this.save();
  },

  editOne(id, payload, image) {
    const product = this.findOneById(id);

    product.name = payload.name;
    product.price = Number(payload.price);
    product.discount = Number(payload.discount);
    product.category = payload.category;
    product.description = payload.description;
    product.image = image ? image.filename : product.image;

    this.save();
  },

  destroyOne(id) {
    products = products.filter((prod) => {
      return prod.id != id;
    });
    this.save();
  },

  save() {
    const productsJSON = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, productsJSON);
  },
};

module.exports = productsService;
