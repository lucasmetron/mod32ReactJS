import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Header name="IBTI" links={["Sobre", "Comprar", "Contato"]}></Header>
  );
}

export default App;
