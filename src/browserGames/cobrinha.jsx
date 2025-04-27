import React, { useState, useEffect } from 'react';
import './cobrinha.css';

function Cobrinha() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const moveInterval = setInterval(moveSnake, 200);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(moveInterval);
    };
  }, [snake, direction]);

  const moveSnake = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = { ...newSnake[newSnake.length - 1] };

    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
      default:
        break;
    }

    // Verifica colisões
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= 20 ||
      head.y >= 20 ||
      snake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      return;
    }

    newSnake.push(head);

    // Se comeu a comida
    if (head.x === food.x && head.y === food.y) {
      setFood({ x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) });
    } else {
      newSnake.shift(); // Se não comeu, remove a cauda
    }

    setSnake(newSnake);
  };

  return (
    <div className="cobrinha-container">
      <h1>Jogo da Cobrinha</h1>
      {gameOver && <div className="game-over">Game Over!</div>}
      <div className="board">
        {[...Array(20)].map((_, row) =>
          [...Array(20)].map((_, col) => {
            const isSnake = snake.some(segment => segment.x === col && segment.y === row);
            const isFood = food.x === col && food.y === row;
            return (
              <div
                key={`${row}-${col}`}
                className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cobrinha;
