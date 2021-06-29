import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter.js';
import Counter, { Teste } from './Counter';

function App() {

  let time = 0;

  const [show, setShow] = useState(true)

  // useEffect(() => {
  //   setInterval(() => {
  //     time++;
  //     console.log(time)
  //     if (time > 5) {
  //       setShow(false);
  //     }
  //   }, 1000);
  // }, [])


  if (show === true) {
    return (
      <div>
        <Counter count={0}></Counter>
      </div>
    );
  } else {
    return (
      <div>
        Count Deletado
      </div>
    );
  }


}

export default App;
