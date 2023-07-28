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
  };
    // useEffect(()=>{
    //     setCurrentLang(() => setCurrentLang('en'))
    //     console.log(currentLang);
    // },[])
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
        {/* <button onClick={() => setCurrentLang('en')}>English</button>
        <button onClick={() => setCurrentLang('fr')}>Français</button> */}
        </div>
    )
};

export default Footer;