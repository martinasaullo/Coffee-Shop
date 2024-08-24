import React from 'react';

function AddProductForm({ products, newProduct, setNewProduct, handleAddProduct, handleDeleteProduct, handleEditProduct }) {
  // Funzione per gestire il click sul pulsante di modifica
  const handleEditClick = (id) => {
    // Trova il prodotto da modificare nella lista dei prodotti
    const productToEdit = products.find(product => product._id === id);
    // Imposta il nuovo prodotto da modificare nello stato
    setNewProduct(productToEdit);
  };

  return (
    <div className="container-lista mt-4">
      {/* Titolo del form */}
      <h1 className="mb-4 custom-heading">Crea la tua lista Desideri</h1>

      {/* Lista dei prodotti */}
      <ul className="list-group mb-4">
        {products.map(product => (
          <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
            {/* Nome del prodotto e quantità */}
            <span>{product.name} - n°{product.price}</span>
            <div>
              {/* Pulsante di modifica */}
              <button className="btn btn-custom btn-warning mr-2" onClick={() => handleEditClick(product._id)}>
                Modifica
              </button>
              {/* Pulsante di eliminazione */}
              <button className="btn btn-custom btn-danger" onClick={() => handleDeleteProduct(product._id)}>
                Elimina
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Form per aggiungere o modificare prodotti */}
      <div className="mb-4">
        {/* Input per il nome del prodotto */}
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Prodotto"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        {/* Input per la quantità del prodotto */}
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Quantità"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />

        {/* Pulsante per aggiungere un nuovo prodotto */}
        <button className="btn btn-custom btn-primary mr-2" onClick={handleAddProduct}>
          Aggiungi Prodotto
        </button>
        {/* Pulsante per salvare le modifiche di un prodotto */}
        <button className="btn btn-custom btn-success" onClick={() => handleEditProduct(newProduct)}>
          Salva Modifiche
        </button>
      </div>
    </div>
  );
}

export default AddProductForm;




