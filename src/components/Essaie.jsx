import React, { useEffect,useState } from 'react';
import '../css/Essaie.css'
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const [isClicked, setIsCliked] = useState(false);
  const [time, setTime] = useState(false);
  const [isClicked2, setIsCliked2] = useState(false);
  const [isLoggedIn] = useState(()=>false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=>{
      const handleScroll = ()=>{
          setIsScrolled(window.scrollY > 0)
      }
      window.addEventListener('scroll', handleScroll);
      return()=>{
          window.removeEventListener('scroll', handleScroll);
      };
  },[])
  
  const handleClick = ()=>{
    //prevState pour definir l'etat
    setIsCliked((prevState) => !prevState);
    console.log('clicker');

    //Pour afficher un contenu après un certain temps.
    setTimeout(()=>{
      setTime((prevState) => !prevState);
    },1000);
  }
  
  const handleClick2 = ()=>{
    setIsCliked2((prevState) => !prevState);
    console.log('clicker2');
  }

  let message;
  if (isLoggedIn) {
  message = <div>Bienvenue, utilisateur connecté !</div>;
  } else {
  message = <div>Veuillez vous connecter pour continuer.</div>;
  }
  // return message;
  
  return (
    <div>
      <header className={isScrolled? "scrolled" : ""}></header>
      {message}
      <h1 onClick={handleClick2} className={isClicked2 ? 'clicke':''}>
        {isClicked2 ? "Merci pour votre achat":"Bienvenue sur le site"}
      </h1>
      
      <button onClick={handleClick} className={isClicked ? 'clicked': ''}>
        {isClicked ? "Tu m'as déja cliqué" : "Clique moi"}
      </button>
      <Link to={"/zone"}>Clique</Link>
      {isClicked && time && 
      <div>
        <h1>Manger</h1>
      </div>
      }
    </div>
  );
};

export default MyComponent;
