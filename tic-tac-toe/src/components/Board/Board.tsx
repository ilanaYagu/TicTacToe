
import React from 'react';
import { SquareValue } from '../../squareTypes';
import Square from '../Square/Square';
import './Board.css';

interface BoardProps {
    onClick(indexOfClickedSquare: number): void;
    squares: SquareValue[];
}

const Board = (props: BoardProps) => {
    return (
        <div className="board">
            {props.squares.map((square, index) => (
                <Square key={index} value={square} onClick={() => props.onClick(index)} />
            ))}
        </div>
    );
};

export default Board;
