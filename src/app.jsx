import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/game';
import TelaBusca  from './pages/busca';
import Cobrinha from './browserGames/cobrinha'

function App(){
    return(
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/busca/:termo" element={<TelaBusca />}/>
            <Route path="/cobrinha" element={<Cobrinha />} />

        </Routes> 
      </Router>
      
    );
}

export default App;
