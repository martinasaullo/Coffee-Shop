// Barra di navigazione


import Logo from '../img/Logo.jpg';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" width="100" height="90" className="d-inline-block align-text-top" />
          </a>

          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Link alla sezione Home */}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#carouselExampleDark">Home</a>
              </li>

              {/* Link alla sezione Chi Siamo */}
              <li className="nav-item">
                <a className="nav-link" href="#aboutUs">Chi Siamo</a>
              </li>

              {/* Link alla sezione Contatti */}
              <li className="nav-item">
                <a className="nav-link" href="#form">Contatti</a>
              </li>

              {/* Link alla sezione Shop Online */}
              <li className="nav-item">
                <Link to="/shop" className="nav-link">Shop Online</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}


export default Header;

