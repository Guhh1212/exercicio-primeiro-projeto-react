import React from 'react';

interface BotaoProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Botao: React.FC<BotaoProps> = ({ onClick, children }) => {
  return (
    <button className="botao" onClick={onClick}>
      {children}
    </button>
  );
};

export default Botao;
