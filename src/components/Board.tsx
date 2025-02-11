import React, { useEffect, useState } from 'react';
import Square from './Square';
import Status from './Status';

//players type
type Player = "X" | "O" | null;


const Board: React.FC = () => {
  //game states

  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<Player | "draw">(null);

  //handleClick for click on squares
  const handleClick = (index: number, player: Player) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      return;
    }
    setCurrentPlayer(player === "X" ? "O" : "X")
  }

  //select move bot
  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      const movBot = getBestMove(board);
      if (movBot !== -1) {
        setTimeout(() => { handleClick(movBot, "O") }, 500);
      }
    }
  }, [currentPlayer, winner, board])


  //method of checkingwinner
  const checkWinner = (board: Player[]): Player | "draw"  => {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diameter
    ];
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : "draw";
  }

  //randome move bot
  const getBestMove = (board: Player[]): number => {
    const emptySquares = board
      .map((val, index) => (val === null ? index : null))
      .filter(val => val !== null) as number[];
    if (emptySquares.length === 0) return -1;
    return emptySquares[Math.floor(Math.random() * emptySquares.length)]
  }

  //reset handleClick
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <p className='text-2xl mb-2 w-96 bg-blue-950 text-white text-center'>Tic Tac Toe</p>
      <div className='flex flex-row justify-around m-3'>

        <button onClick={resetGame} className='m-2 p-2 bg-red-700 text-white rounded'>
          Reset Game
        </button>
      </div>
      <Status winner={winner} currentPlayer={currentPlayer} />
      <div className='grid grid-cols-[100px_100px_100px] gap-1 my-5 mx-auto'>
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index, "X")} />
        ))}
      </div>

    </div>
  )
}

export default Board
