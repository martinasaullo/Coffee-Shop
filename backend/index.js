const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  email: String, // Aggiunto il campo email
  message: String, // Aggiunto il campo message
});

const Product = mongoose.model('Product', productSchema);

app.post('/api/products', async (req, res) => {
  const { name, price, email, message } = req.body;
  const product = new Product({ name, price, email, message });
  await product.save();
  res.json(product);
});

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(id, { name, price }, { new: true });
  res.json(updatedProduct);
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json({ message: 'Product deleted successfully' });
});

app.get('/', (req, res) => {
  res.send('Il server è attivo!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



