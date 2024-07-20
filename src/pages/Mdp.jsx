import React from "react";
import "../css/Mdp.css"
import { Link } from "react-router-dom";

const Mdp = ()=>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Mot de passe oublié</h1>
                <hr />
                <label htmlFor="">Email</label>
                <input type="Email" placeholder="Email"/>

                <label htmlFor="">Nouveau mot de passe</label>
                <input type="password" placeholder="Nouveau mot de passe" /><br />
                <input type="password" placeholder="Rétaper le nouveau mot de passe" autoComplete="Off"/><br />

                <Link to={"/accueil"} className="btn">Changer le mot de passe</Link><br />
            </form>
        </div>
    )
};

export default Mdp;