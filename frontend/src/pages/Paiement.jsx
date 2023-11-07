import React, { useState } from 'react';
import Header from "../components/Header";
import { Link, useLocation } from 'react-router-dom';
import enMessages from "../languages/En.json";
// import itMessages from "../languages/It.json";
import frMessages from "../languages/Fr.json";
// import "../css/Paiement.css"
  
const Paiement = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const total = queryParams.get("total")

  // Pour changer la langue de l'application.
  const [language, setLanguage] = useState('en'); // 'fr' pour le français, 'en' pour l'anglais, pour définir la langue par défaut 
  const messages = language === 'en' ? enMessages : frMessages;

  // Fonction pour changer la langue
  const toggleLanguage = () => {
    // Mettre à jour la langue en fonction de la langue actuelle
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
};

  // État local pour suivre la progression du formulaire
  const [step, setStep] = useState(1);
  
  // États locaux pour stocker les données du formulaire
  const [formDataStep1, setFormDataStep1] = useState({
    email: '',
    phone: '',
    address: '',
    addressOptionnel: '',
    city: '',
    zipCode: '',
    region: '',
  });

  const [formDataStep2, setFormDataStep2] = useState({
    debitCard: '',
    month: '',
    year: '',
    cvv: '',
  });
  
  // Gestionnaires d'événements pour capturer les données du formulaire à chaque étape
  const handleChangeStep1 = (event) => {
    const { name, value } = event.target;
    setFormDataStep1({ ...formDataStep1, [name]: value });
  };

  const handleChangeStep2 = (event) => {
    const { name, value } = event.target;
    setFormDataStep2({ ...formDataStep2, [name]: value });
  };

  // Gestionnaire d'événements pour passer à l'étape suivante du formulaire
  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  
  // Gestionnaire d'événements pour revenir à l'étape précédente du formulaire
  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Gestionnaire d'événements pour soumettre le formulaire
  const handleSubmit = () => {
    // Faites ici ce que vous souhaitez avec les données du formulaire (par exemple, envoi au serveur)
    // Vous pouvez accéder aux données du formulaire dans les états formDataStep1, formDataStep2 et formDataStep3
    // après que l'utilisateur a terminé toutes les étapes du formulaire.
    console.log('Données soumises :', {
      ...formDataStep1,
      ...formDataStep2,
    });
    
  };

  return (
    <div>
      <Header/>
      <p>Total : <span>{total} €</span></p>
      
      {step === 1 && (
        <div>

          <div className="etape1">
            <h2>{messages["step1"]}</h2>
            <input
              type="text"
              name="email"
              value={formDataStep1.email}
              onChange={handleChangeStep1}
              placeholder={messages["email"]}
              required
              />
            <input
              type="number"
              name="phone"
              value={formDataStep1.phone}
              onChange={handleChangeStep1}
              placeholder={messages["phone"]}
              required
            />
            <input
              type="text"
              name="address"
              value={formDataStep1.address}
              onChange={handleChangeStep1}
              placeholder="5 rue du charme"
              required
            />
            <input
              type="text"
              name="optionnel"
              value={formDataStep1.addressOptionnel}
              onChange={handleChangeStep1}
              placeholder ={messages["optional"]}
              required
            />
            <input
              type="text"
              name="city"
              value={formDataStep1.City}
              onChange={handleChangeStep1}
              placeholder={messages["city"]}
              required
            />
            <input
              type="number"
              name="zipCode"
              value={formDataStep1.zipCode}
              onChange={handleChangeStep1}
              placeholder={messages["zipCode"]}
              required
            />
            <input
              type="text"
              name="region"
              value={formDataStep1.region}
              onChange={handleChangeStep1}
              placeholder={messages["region"]}
              required
            />
            <button onClick={handleNextStep}>{messages["next_step"]}</button>
          </div>

          <div className="panier">
            <h1>{messages["card"]}</h1>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>{messages["step2"]}</h2>
          <input
            type="number"
            name="debitCard"
            value={formDataStep2.debitCard}
            onChange={handleChangeStep2}
            placeholder={messages["card"]}
          />
          <select name="selectmonth" id="">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select name="selectYear" id="">
            <option value=""></option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
          
          <input
            type="text"
            name="cvv"
            value={formDataStep2.cvv}
            onChange={handleChangeStep2}
            placeholder="cvv"
          />
          <button onClick={handlePrevStep}>{messages["previous"]}</button>
          <button onClick={handleNextStep}>{messages["validate_payment"]}</button>
        </div>
      )}

      {step === 3 && (
        <div className='etape3'>
          {/*Ajouter un icon de confirmer*/}
          <h2>{messages["shipping_address"]}</h2>
          <ul>
            <ol>Nom et Prénom</ol>
            <ol>Adresse Rue</ol>
            <ol>Ville et Code Postal</ol>
            <ol>Numéro de téléphone</ol>
          </ul>

          <h2>{messages["payment_mode"]}</h2>

          <button onClick={handlePrevStep}>{messages["previous"]}</button>
          <Link to={"/accueil"}><button onClick={handleSubmit}>{messages["confirm"]}</button></Link>
        </div>
      )}
      <button onClick={toggleLanguage} className="btnLangue">{messages["lang"]} {language === 'fr' ? 'anglais' : 'français'}</button>
    </div>
  );
};

export default Paiement;
