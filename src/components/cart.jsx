// Cart.jsx

import React from 'react';

function Cart({ cart, onUpdateQuantity, onRemoveFromCart, onResetCart }) {
  return (
    <div>
      <h2>Carrello</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantità: {item.quantity} - Prezzo unitario: €{item.price} - Totale: €{item.price * item.quantity}
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => onRemoveFromCart(item.id)}>Rimuovi</button>
          </li>
        ))}
      </ul>
      <button onClick={onResetCart}>Azzera Carrello</button>
    </div>
  );
}

export default Cart;

