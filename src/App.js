import React from 'react';
import './assets/css/App.css';
//Importar Componentes
//import Peliculas from './components/Peliculas';
import Router from './Router';

function App() {
  return (
    <div className="App">
        <Router/>
        {/*
        <Peliculas/>
        */}
    </div>
  );
}

export default App;
