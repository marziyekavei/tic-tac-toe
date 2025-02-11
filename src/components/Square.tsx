import React from 'react';

//players type
type SquareProps = {
  value: "X" | "O" | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="w-[100px] h-[100px] flex items-center justify-center text-3xl cursor-pointer bg-blue-100"
      onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
