import { useEffect, useState } from 'react';
import axios from 'axios';
import ShopHeader from './components/shopHeader';
import CardItem from './components/cardItem';
import AddProductForm from './components/AddProductForm';
import Footer from './components/footer';

function Shop() {
  // Contatore del carrello
  const [cartCount, setCartCount] = useState(0);

  // Lista dei prodotti
  const [products, setProducts] = useState([]);

  // Nuovo prodotto da aggiungere o modificare
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  // Carica i prodotti dal server al caricamento della pagina
  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  // Incrementa il contatore del carrello quando viene aggiunto un prodotto
  const handleAddProductToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  // Resetta il contatore del carrello a 0
  const handleResetCart = () => {
    setCartCount(0);
  };

  // Aggiunge un nuovo prodotto
  const handleAddProduct = () => {
    axios.post('http://localhost:3001/api/products', newProduct)
      .then(response => setProducts([...products, response.data]))
      .catch(error => console.error(error));
  };

  // Elimina un prodotto
  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:3001/api/products/${id}`)
      .then(() => setProducts(products.filter(product => product._id !== id)))
      .catch(error => console.error(error));
  };

  // Modifica un prodotto esistente
  const handleEditProduct = (editedProduct) => {
    axios.put(`http://localhost:3001/api/products/${editedProduct._id}`, editedProduct)
      .then(response => {
        setProducts(products.map(product => (product._id === editedProduct._id ? response.data : product)));
        setNewProduct({ name: '', price: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      {/* Intestazione del negozio con il contatore del carrello */}
      <ShopHeader cartCount={cartCount} resetCart={handleResetCart} />

      {/* Modulo per aggiungere, modificare ed eliminare prodotti */}
      <AddProductForm
        products={products}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        handleAddProduct={handleAddProduct}
        handleDeleteProduct={handleDeleteProduct}
        handleEditProduct={handleEditProduct}
      />

      {/* Elemento del carrello con pulsante Aggiungi al carrello */}
      <CardItem addToCart={handleAddProductToCart} />

      
      <Footer />
    </>
  );
}

export default Shop;


