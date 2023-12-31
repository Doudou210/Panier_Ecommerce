import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chargement from './pages/Chargement';
import PageConnexion from './pages/PageConnexion';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Mdp from './pages/Mdp';
import Accueil from './pages/Accueil';
import Paiement from './pages/Paiement';
import Return from './components/Return';
import Details from './components/Details';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' Component={Chargement}/>
        <Route path='/PageConnexion' Component={PageConnexion}/>
        <Route path='/connexion' Component={Connexion}/>
        <Route path='/inscription' Component={Inscription}/>
        <Route path='/mdp' Component={Mdp}/>
        <Route path='/accueil' Component={Accueil}/>
        <Route path='/accueil/paiement' Component={Paiement}/>
        <Route path='/accueil/details' Component={Details}/>
        <Route path='/return' Component={Return}/>
      </Routes>
    </div>
  );
}

export default App;
