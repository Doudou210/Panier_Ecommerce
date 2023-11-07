import React, { useState } from "react";
import "../css/Footer.css";
import enMessages from "../languages/En.json";
import frMessages from "../languages/Fr.json";

const Footer = () => {    
    // État pour suivre la langue sélectionnée
  const [language, setLanguage] = useState('en'); // 'fr' pour le français, 'en' pour l'anglais, vous pouvez définir la langue par défaut ici
  const messages = language === 'en' ? enMessages : frMessages;

  // Fonction pour changer la langue
  const toggleLanguage = () => {
    // Mettre à jour la langue en fonction de la langue actuelle
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  }

    return(
        <div>
            <footer>
                <div className="about">
                    <h1>{messages['about']}</h1>
                    <ul>
                    <li>{messages['about_us']}</li>
                    <li>{messages['media']}</li>
                    <li>{messages['blog']}</li>
                    </ul>
                </div>

                <div className="cuisines">
                    <h1>{messages['top_cuisines']}</h1>
                    <ul>
                    <li>{messages['bengali']}</li>
                    <li>{messages['japanese']}</li>
                    <li>{messages['chinese']}</li>
                    <li>{messages['italian']}</li>
                    <li>{messages['thai']}</li>
                    </ul>
                </div>

                <div className="aides">
                    <h1>{messages['need_help']}</h1>
                    <ul>
                    <li>{messages['questions']}</li>
                    <li>{messages['cancel_order']}</li>
                    <li>{messages['pay']}</li>
                    <li>{messages['order']}</li>
                    <li>{messages['delivery']}</li>
                    <li>{messages['payment_methods']}</li>
                    </ul>
                </div>

                <div className="newsletter">
                    <h1>{messages['newsletter_follow_us']}</h1>
                    <ul>
                    <li>{messages['facebook']}</li>
                    <li>{messages['snapchat']}</li>
                    <li>{messages['instagram']}</li>
                    <li>{messages['twitter']}</li>
                    <li>{messages['pinterest']}</li>
                    </ul>
                </div>
            </footer>
            
            <button onClick={toggleLanguage}>
                Changer de langue en {language === 'fr' ? 'anglais' : 'français'}
            </button>

            <div className="copy">
                <p>Copyright 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            height="30" viewBox="0 -960 960 960" width="30">
                            <path d="M393-320h173q14 0 20.5-9.5T593-353v-73h-60v46H426v-200h107v47h60v-73q0-14-6.5-24T566-640H393q-14 0-20.5 10t-6.5 24v253q0 14 6.5 23.5T393-320Zm87 240q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>
                        </svg>
                    </span> 
                    2023 Manhé - Tous droits réservés par 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            height="30" viewBox="0 -960 960 960" width="30">
                            <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm133-137h127q14 0 27-9.487 13-9.488 13-23.513v-73q0-14.025-13-23.513Q414-496 400-496H290v-57h100v17h50v-32.982Q440-583 427-593t-27-10H273q-14.025 0-23.512 9.775Q240-583.45 240-569v73q0 14.025 9.488 23.513Q258.975-463 273-463h117v56H290v-16h-50v32.982q0 14.018 9.488 23.518Q258.975-357 273-357Zm247 0h150q20 0 35-15t15-35v-146q0-20-15-35t-35-15H520v246Zm50-50v-146h100v146H570ZM140-220v-520 520Z"/>
                        </svg>
                    </span>
                </p>
            </div>
        </div>
    )
};

export default Footer;