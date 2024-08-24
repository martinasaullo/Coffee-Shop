// Componente ShopHeader che rappresenta l'intestazione della sezione Shop


import React from 'react';
import Logo from '../img/Logo.jpg';
import { Link } from 'react-router-dom';

// Componente funzionale ShopHeader con props cartCount e resetCart
function ShopHeader({ cartCount, resetCart }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        {/* Link alla home con il logo */}
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" width="100" height="90" className="d-inline-block align-text-top" />
        </Link>
        
        {/* Contenuto del carrello */}
        <div className="d-flex align-items-center">
          {/* Pulsante del carrello con il numero di articoli nel carrello */}
          <button className="btn btn-custom me-3">
            <i className="bi bi-cart"></i> Carrello{' '}
            <span className="badge bg-danger">{cartCount}</span>
          </button>

          {/* Pulsante per azzerare il carrello */}
          <button className="btn btn-danger" onClick={resetCart}>
            Azzera Carrello
          </button>
        </div>
      </div>
    </nav>
  );
}

// Esportazione del componente ShopHeader
export default ShopHeader;


