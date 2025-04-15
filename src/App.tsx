import React, { useState } from 'react';
import Welcome from './components/Welcome';
import PlayerInput from './components/PlayerInput';
import Game from './components/Game';
import './App.css';

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>('');
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const handlePlayerNameSubmit = (name: string) => {
    setPlayerName(name);
    setGameStarted(true);
  };

  const handleChangePlayer = () => {
    setPlayerName('');
    setGameStarted(false);
  };

  return (
    <div className="app">
      <div className={`welcome-container ${!playerName ? 'active' : 'hidden'}`}>
        {!playerName && !gameStarted && <Welcome />}
        {!playerName && <PlayerInput onSubmit={handlePlayerNameSubmit} />}
      </div>
      {gameStarted && <Game playerName={playerName} onChangePlayer={handleChangePlayer} />}
    </div>
  );
};

export default App;
