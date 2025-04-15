import React, { useState, useEffect } from 'react';

interface GameProps {
  playerName: string;
  onChangePlayer: () => void;
}

const Game: React.FC<GameProps> = ({ playerName, onChangePlayer }) => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (squares: string[]): string | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const computerMove = () => {
    const emptyCells = board.map((cell, idx) => cell === '' ? idx : -1).filter(idx => idx !== -1);
    if (emptyCells.length > 0) {
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const newBoard = [...board];
      newBoard[randomCell] = 'O';
      setBoard(newBoard);
      setIsPlayerTurn(true);
    }
  };

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const timeout = setTimeout(computerMove, 500);
      return () => clearTimeout(timeout);
    }
  }, [isPlayerTurn]);

  const handleCellClick = (index: number) => {
    if (!board[index] && isPlayerTurn && !winner) {
      const newBoard = [...board];
      newBoard[index] = 'X';
      setBoard(newBoard);
      setIsPlayerTurn(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setIsPlayerTurn(true);
    setWinner(null);
  };

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result === 'X' ? playerName : 'Computer');
    }
  }, [board]);

  return (
    <div className="game fade-in">
      <h1 className="welcome-highlight">Tic-Tac-Toe</h1>
      <h2>{playerName} vs Computer</h2>
      <div className="status">
        {!winner && `${isPlayerTurn ? "Your turn" : "Computer's turn"}`}
      </div>
      {winner && (
        <div className="winner-overlay">
          <div className="winner-content">
            <button className="close-button" onClick={resetGame}>×</button>
            <span className="trophy">🏆</span>
            <h2>Congratulations!</h2>
            <p className="winner-text">{winner} wins!</p>
          </div>
        </div>
      )}
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? 'filled' : ''}`}
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="button-group">
        <button className="reset-button" onClick={resetGame}>Reset Game</button>
        <button className="change-player-button" onClick={onChangePlayer}>Change Player</button>
      </div>
    </div>
  );
};

export default Game;
