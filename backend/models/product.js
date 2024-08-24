// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // altri campi se necessario
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
