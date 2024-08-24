// Componente CardItem che mostra una selezione di macchinette del caffè con pulsante "Aggiungi al Carrello"

// Import immagini delle macchinette
import Macchinetta1 from '../img/macchina1.jpg';
import Macchinetta2 from '../img/macchina2.webp';
import Macchinetta3 from '../img/macchina3.jpeg';
import Macchinetta4 from '../img/macchina4.jpg';
import Macchinetta5 from '../img/macchina5.webp';
import Macchinetta6 from '../img/macchina6.jpg';

// Componente funzionale CardItem che accetta la funzione addToCart come prop
function CardItem({ addToCart }) {
  return (
    <>
      <section className="card-item-container pb-3 pt-3">
        <div className="container">
          {/* Prima fila di macchinette */}
          <div className="row mt-4 mb-4">
            <div className="col-sm">
              {/* Card per la Macchinetta 1 */}
              <div className="card" style={{ width: '18rem' }}>
                <img src={Macchinetta1} className="card-img-top" alt="Macchinetta 1" />
                <div className="card-body">
                  <h5 className="card-title">Macchinetta 1</h5>
                  <p className="card-text">€ 149,90</p>
                  <a href="#" className="btn btn-custom" onClick={addToCart}>Aggiungi al Carrello</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              {/* Card per la Macchinetta 2 */}
              <div className="card" style={{ width: '18rem' }}>
                <img src={Macchinetta2} className="card-img-top" alt="Macchinetta 2" />
                <div className="card-body">
                  <h5 className="card-title">Macchinetta 2</h5>
                  <p className="card-text">€ 139,90</p>
                  <a href="#" className="btn btn-custom" onClick={addToCart}>Aggiungi al Carrello</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              {/* Card per la Macchinetta 3 */}
              <div className="card" style={{ width: '18rem' }}>
                <img src={Macchinetta3} className="card-img-top" alt="Macchinetta 3" />
                <div className="card-body">
                  <h5 className="card-title">Macchinetta 3</h5>
                  <p className="card-text">€ 139,90</p>
                  <a href="#" className="btn btn-custom" onClick={addToCart}>Aggiungi al Carrello</a>
                </div>
              </div>
            </div>
          </div>

          {/* Seconda fila di macchinette */}
          <div className="row mt-4 mb-4">
            <div className="col-sm">
              {/* Card per la Macchinetta 4 */}
              <div className="card" style={{ width: '18rem' }}>
                <img src={Macchinetta4} className="card-img-top" alt="Macchinetta 4" />
                <div className="card-body">
                  <h5 className="card-title">Macchinetta 4</h5>
                  <p className="card-text">€ 169,90</p>
                  <a href="#" className="btn btn-custom" onClick={addToCart}>Aggiungi al Carrello</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              {/* Card per la Macchinetta 5 */}
              <div className="card" style={{ width: '18rem' }}>
                <img src={Macchinetta5} className="card-img-top" alt="Macchinetta 5" />
                <div className="card-body">
                  <h5 className="card-title">Macchinetta 5</h5>
                  <p className="card-text">€ 129,90</p>
                  <a href="#" className="btn btn-custom" onClick={addToCart}>Aggiungi al Carrello</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              {/* Card per la Macchinetta 6 */}
              <div className="card" style={{ width: '18rem' }}>
                <img src={Macchinetta6} className="card-img-top" alt="Macchinetta 6" />
                <div className="card-body">
                  <h5 className="card-title">Macchinetta 6</h5>
                  <p className="card-text">€ 159,90</p>
                  <a href="#" className="btn btn-custom" onClick={addToCart}>Aggiungi al Carrello</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardItem;

