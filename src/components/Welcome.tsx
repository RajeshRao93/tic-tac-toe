import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="welcome slide-down">
      <div className="welcome-text">
        <h1 className="welcome-title">Welcome to</h1>
        <h1 className="welcome-highlight">Tic-Tac-Toe</h1>
        <p className="welcome-subtitle">Get ready to challenge the computer!</p>
      </div>
    </div>
  );
};

export default Welcome;
