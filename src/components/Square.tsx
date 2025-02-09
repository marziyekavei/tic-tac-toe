import React from 'react';

//players type
type SquareProps = {
  value: "X" | "O" | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="w-[100px] h-[100px] flex items-center justify-center text-3xl cursor-pointer border border-black rounded-sm bg-gray-200" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
