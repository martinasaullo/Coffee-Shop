import React, { useState } from 'react';
import validator from 'validator';

function Form() {
  // Utilizzo dello stato per gestire i dati del form e il popup di successo
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Funzione di gestione del cambiamento nei campi del form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Funzione di gestione dell'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione dell'indirizzo email utilizzando la libreria validator
    if (!validator.isEmail(formData.email)) {
      console.error("L'indirizzo email non è valido");
      return;
    }

    try {
      // Invio dei dati del form al backend tramite una richiesta POST
      const response = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Recupero dei dati di risposta dal backend
      const data = await response.json();
      console.log('Dati inviati con successo:', data);

      // Mostra il popup di successo
      setShowSuccessPopup(true);

      // Resettare lo stato del form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error("Errore nell'invio dei dati:", error);
    }
  };

  
  return (
    <section id="form" className="franchise-section">
      <div className="franchise-form">
        <h2>Compila il Form per richiedere Informazioni!</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo Nome */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Campo Email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Campo Messaggio */}
          <label htmlFor="message">Messaggio:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* Pulsante di Invio */}
          <button className="btn" type="submit">
            Invia
          </button>
        </form>

        {/* Popup di successo */}
        {showSuccessPopup && (
          <div className="success-popup">
            <p>Richiesta inviata correttamente!</p>
            <button onClick={() => setShowSuccessPopup(false)}>Chiudi</button>
          </div>
        )}
      </div>
    </section>
  );
}


export default Form;


