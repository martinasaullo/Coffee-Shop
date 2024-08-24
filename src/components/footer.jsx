// Componente Footer 


import Logo from '../img/Logo.jpg';
import facebook from '../img/Facebook_icon.svg.png';
import instagram from '../img/Instagram.png';
import x from '../img/x.png';


function Footer() {
  return (
    <footer>
      
      <div className="footer-content">
        
        <div className="store-info">
          <img src={Logo} alt="Logo" width="50" height="50" />
          <p>Via del Caffè, 200 - Caffitalia (CF) - 12345<br />Telefono: 333 3333333</p>
        </div>

        {/* Social media */}
        <div className="social-media">
          {/* Link a Facebook */}
          <a href="#" target="_blank"><img src={facebook} alt="Facebook" /></a>

          {/* Link a Instagram */}
          <a href="#" target="_blank"><img src={x} alt="X" /></a>

          {/* Link a Instagram */}
          <a href="#" target="_blank"><img src={instagram} alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
