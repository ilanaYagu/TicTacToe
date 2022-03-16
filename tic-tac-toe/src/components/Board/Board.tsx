
import React from 'react';
import { SquareValue } from '../../squareTypes';
import Square from '../Square/Square';
import './Board.css'

interface BoardProps {
    onClick(i: number): void;
    squares: SquareValue[];
}

const Board: React.FC<BoardProps> = ({ onClick, squares }) => {
    return (
        <div className="board">
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    );
};

export default Board;
