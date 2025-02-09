import React, { useState } from 'react';
import Square from './Square';

//players type
type Player = "X" | "O" | null;


const Board: React.FC = () => {

  //board status
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));


  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <p className='text-2xl'>Tic Tic Toe</p>
      <div className='grid grid-cols-[100px_100px_100px] gap-1 my-5 mx-auto'>
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => (index)} />
        ))}
      </div>
    </div>
  )
}

export default Board
