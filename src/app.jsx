import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/game';
import TelaBusca  from './pages/busca';

function App(){
    return(
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/busca/:termo" element={<TelaBusca />}/>
        </Routes> 
      </Router>
      
    );
}

export default App;
