import React from "react";
import Produits from "../components/Produits";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Accueil = () => {
    return(
        <div>
            <Header />
            <Banner/>
            <Produits/>
            <Footer/>
        </div>
    )
};

export default Accueil;

// import React from 'react';
// import Login from '../connexion/Login';
// import Register from "../connexion/Register"

// function App() {
//   const handleLogin = (username, password) => {
//     // Simulate login logic here
//     alert(`Logged in with username: ${username}`);
//   };

//   const handleRegister = (username, password) => {
//     // Simulate registration logic here
//     alert(`Registered user with username: ${username}`);
//   };

//   return (
//     <div className="App">
//       <Login handleLogin={handleLogin} />
//       <Register handleRegister={handleRegister} />
//     </div>
//   );
// }

// export default App;
