import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter.js';

function App() {
  return (
    <div>
      <Header name="José" links={["Sobre", "Comprar", "Contato"]}></Header>
      <Counter count={0}></Counter>
    </div>
  );


}

export default App;
