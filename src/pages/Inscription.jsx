import React from "react";
import { Link } from "react-router-dom";
import "../css/Connexion.css"

const Inscription = ()=>{
    return(
        <div className="wrapper">
                <form action="">
                    <h1>Inscription</h1>
                    <hr />
                    <label htmlFor="">Prénom</label>
                    <input type="name" placeholder="Prénom" required/> 

                    <label htmlFor="">Nom</label>
                    <input type="name" placeholder="Nom" required/>
                    
                    <label htmlFor="">Nom d'utilisateur</label>
                    <input type="name" placeholder="Nom d'utilisateur" required/>

                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" required/>

                    <label htmlFor="">Mot de passe</label>
                    <input type="password" placeholder="Mot de passe" required/>

                    <label htmlFor="">Sexe</label>
                    <select required>
                        <option value=""></option>
                        <option value="H">Homme</option>
                        <option value="F">Femme</option>
                        <option value="O">Autre</option>
                    </select><br />
                    <button>S'inscrire</button>

                    <hr />
                    <p>Vous avez un compte?<Link to={"/pageconnexion"}>Se connecter</Link></p>
                </form>
                
        </div>
    )
};

export default Inscription;