
import './App.css';
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom";
import Marvel from './pages/Marvel'
import SuperHeroes from './pages/Superheroes';
import SuperHeroines from './pages/Superheroines';
import Dccomics from './pages/dccomics'
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
  
  
        
          <Routes>
            <Route index element={<Home />} />
            <Route path='/marvel' element={<Marvel />} />
            <Route path='/dccomics' element={<Dccomics />} />
            <Route path='/superheroes' element={<SuperHeroes />} />
            <Route path='/superheroines' element={<SuperHeroines />} />       
            <Route path='*' element={<ErrorPage />} />       
          </Routes>
       
    
 
  );
}

export default App;
