import React from 'react';

type StatusProps = {
    currentPlayer: "X" | "O";
    winner: "X" | "O" | "draw" | null;
}

const Status: React.FC<StatusProps> = ({ currentPlayer, winner }) => {
    if (winner == "X" || winner == "O") {
        return <div className='w-72 text-center mt-2 p-2 border rounded-lg text-green-600'>winner : {winner}</div>
    }
    if (winner == "draw") {
        return <div className='w-72 text-center border rounded-xl mt-2 p-2 text-yellow-400'>ites a draw!</div>
    }
    return <div className='w-72 text-center mt-2 p-2 border rounded-lg text-blue-900'>next player : {currentPlayer}</div>
}

export default Status
