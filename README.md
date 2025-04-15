# Tic Tac Toe Game

A modern, interactive Tic-tac-toe game built with React and TypeScript, featuring animations and a computer opponent.

## Features

- Interactive game board with animations
- Player vs Computer gameplay
- Welcoming user interface with smooth transitions
- Player name customization
- Winner celebration overlay
- Game reset and player change options

## Technologies Used

- React 18
- TypeScript
- CSS3 Animations
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd tic-tac-toe
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The game will open in your default browser at `http://localhost:3000`

## How to Play

1. Enter your name when prompted
2. You play as 'X', and the computer plays as 'O'
3. Click any empty cell to make your move
4. The computer will automatically make its move
5. First to get three in a row wins!

## Game Controls

- Reset Game: Starts a new game with the same player
- Change Player: Returns to the welcome screen for a new player

## Project Structure

```
tic-tac-toe/
├── src/
│   ├── components/
│   │   ├── Game.tsx
│   │   ├── Welcome.tsx
│   │   └── PlayerInput.tsx
│   ├── App.tsx
│   └── App.css
├── public/
│   └── index.html
└── package.json
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
