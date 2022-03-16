
import React from 'react';
import { GameBoard } from '../../gameTypes';
import Square from '../Square/Square';
import './Board.css';

interface BoardProps {
    onClick(indexOfClickedSquareInBoard: number): void;
    board: GameBoard;
}

const Board = (props: BoardProps) => {
    return (
        <div className="board">
            {props.board.squares.map((square, index) => (
                <Square key={index} value={square} onClick={() => props.onClick(index)} />
            ))}
        </div>
    );
};

export default Board;
