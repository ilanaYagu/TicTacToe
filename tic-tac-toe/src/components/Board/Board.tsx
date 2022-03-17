
import React from 'react';
import { GameBoard } from '../../gameTypes';
import Square from '../Square/Square';
import './Board.css';

interface BoardProps {
    onClick(indexOfClickedSquareInBoard: number): void;
    board: GameBoard;
}

const Board = ({ onClick, board }: BoardProps) => {
    return (
        <div className="board">
            {board.squares.map((square, index) => (
                <Square key={index} value={square} onClick={() => onClick(index)} />
            ))}
        </div>
    );
};

export default Board;
