import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import { GameHistory } from '../../gameTypes';
import Board from '../Board/Board';
import './Game.css';

const Game = () => {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [history, setHistory] = useState<GameHistory>({
        gameBoards: [
            {
                squares: Array(9).fill(null)
            }
        ]
    });

    const handleClickOnSquare = (indexOfClickedSquare: number): void => {
        const newHistoryGameBoards = history.gameBoards.slice(0, stepNumber + 1);
        const currentGameBoard = newHistoryGameBoards[newHistoryGameBoards.length - 1];
        const squares = currentGameBoard.squares.slice();
        if (!(calculateWinner(squares) || squares[indexOfClickedSquare])) {
            squares[indexOfClickedSquare] = xIsNext ? "X" : "O";
            setHistory({
                gameBoards: newHistoryGameBoards.concat([
                    {
                        squares: squares
                    }
                ])
            })
            setStepNumber(newHistoryGameBoards.length);
            setXIsNext(!xIsNext);
        }
    };

    const jumpTo = (step: number): void => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0)
    };


    const currentGameBoard = history.gameBoards[stepNumber];
    const winner = calculateWinner(currentGameBoard.squares);

    const moves = history.gameBoards.map((step, move) => {
        const desc = move ?
            `Go to move #${move}` :
            'Go to game start';
        return (
            <button key={move} onClick={() => jumpTo(move)} className="move">{desc}</button>
        );
    });

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div id="game">
            <div>
                <Board
                    board={currentGameBoard}
                    onClick={index => handleClickOnSquare(index)}
                />
            </div>
            <div>
                <div>{status}</div>
                {moves}
            </div>
        </div>
    );
};

export default Game;
