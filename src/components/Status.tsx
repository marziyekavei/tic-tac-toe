import React from 'react';

type StatusProps = {
    currentPlayer: "X" | "O" ;
    winner: "X" | "O" |"draw"| null;
}

const Status: React.FC<StatusProps> = ({ currentPlayer, winner }) => {
    if (winner=="X"||winner=="O") {
        return <div>winner : {winner}</div>
    }
    if (winner == "draw") {
        return <div>ites a draw</div>
    }
    return <div>next player : {currentPlayer}</div>
}

export default Status
