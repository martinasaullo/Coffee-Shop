// Componente Carousel per mostrare un carosello di immagini nel tuo Coffee Shop

// Import delle immagini dell'header
import Header1 from '../img/Header.jpg';
import Header2 from '../img/header2.jpg';
import Header3 from '../img/header3.webp';

// Componente funzionale Carousel
function Carousel() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      {/* Indicatori del carosello */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Immagini del carosello */}
      <div className="carousel-inner">
        {/* Prima immagine */}
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={Header1} className="d-block w-100" alt="First slide" style={{ maxHeight: '600px', display: 'flex' }} />
          <div className="carousel-caption d-none d-md-block" style={{ color: '#FFC26F' }}>
            <h5>COFFEE SHOP</h5>
          </div>
        </div>

        {/* Seconda immagine */}
        <div className="carousel-item" data-bs-interval="2000">
          <img src={Header2} className="d-block w-100" alt="Second slide" style={{ maxHeight: '600px', display: 'flex' }} />
          <div className="carousel-caption d-none d-md-block" style={{ color: '#FFC26F' }}>
            <h5>COFFEE SHOP</h5>
          </div>
        </div>

        {/* Terza immagine */}
        <div className="carousel-item">
          <img src={Header3} className="d-block w-100" alt="Third slide" style={{ maxHeight: '600px', display: 'flex' }} />
          <div className="carousel-caption d-none d-md-block" style={{ color: '#FFC26F' }}>
            <h5>COFFEE SHOP</h5>
          </div>
        </div>
      </div>

      {/* Controlli del carosello */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
