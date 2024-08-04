import './App.css';
import { Routes, Route } from 'react-router-dom';
import Mdp from './pages/Mdp';
import Accueil from './pages/Accueil';
import Paiement from './pages/Paiement';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' Component={Accueil}/>
        <Route path='/login' Component={SignIn}/>
        <Route path='/register' Component={SignUp}/>
        <Route path='/mdp' Component={Mdp}/>
        <Route path='/accueil/paiement' Component={Paiement}/>
      </Routes>
    </div>
  );
}

export default App;
