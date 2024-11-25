import React, { useState } from 'react';
import Botao from './components/Botao.tsx';
import logo from './assets/img.png';
import './App.css';

const App: React.FC = () => {
  const [cliques, setCliques] = useState(0);

  const handleIncrement = () => {
    setCliques(cliques + 1);
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo React" className="React" />
      <p className="description">
        Eu sou <span>Gustavo</span> e esse é meu primeiro projeto usando <span>React</span>. Cliques:<span>{cliques}</span>
      </p>
      <Botao onClick={handleIncrement}>Contar clique</Botao>
    </div>
  );
};

export default App;
