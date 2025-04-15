import React, { useState } from 'react';

interface PlayerInputProps {
  onSubmit: (name: string) => void;
}

const PlayerInput: React.FC<PlayerInputProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="player-input slide-up">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};

export default PlayerInput;
