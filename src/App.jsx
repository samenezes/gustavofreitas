import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quest, setquest] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=30&category=16')
      .then(response => response.json())
      .then(data => setquest(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Header />
    <div className="App">
      <h1>Perguntas e Respostas</h1>
    </div>
    <Footer />
  );
}

export default App
