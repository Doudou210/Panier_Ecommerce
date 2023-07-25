import React from "react";
import { Link } from "react-router-dom";
import "../css/Connexion.css"

const Connexion = ()=>{
    return(
        <div className="wrapper">
            <form action="">
                    <h1>Connexion</h1>
                    <hr />
                    <label>Email ou nom d'utilisateur</label>
                    <input type="email" placeholder="Email ou nom d'utilisateur" required/>

                    <label htmlFor="">Mot de passe</label>
                    <input type="password" placeholder="Mot de passe" required/>
                    
                    <Link to={"/mdp"}><p>Mot de passe oublié?</p></Link>
                    <button type="submit">Se connecter</button>
                    <hr />
                    <p>Vous n'avez pas de compte?<Link to={"/inscription"}>S'inscrire</Link></p>
                </form>
        </div>
    )
};

export default Connexion;