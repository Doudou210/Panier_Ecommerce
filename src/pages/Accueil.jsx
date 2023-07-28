import React from "react";
import Produits from "../components/Produits";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Accueil = () => {
    return(
        <div>
            <Header />
            <Produits/>
            <Footer/>
        </div>
    )
};

export default Accueil;