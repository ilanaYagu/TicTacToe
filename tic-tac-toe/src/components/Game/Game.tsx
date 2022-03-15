import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import { SquareValue } from '../../squareTypes';
import Board from '../Board/Board';
import './Game.css';

const Game: React.FC = () => {
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [history, setHistory] = useState<{ squares: SquareValue[] }[]>([
        {
            squares: Array(9).fill(null)
        }
    ]);

    const handleClickOnSquare = (i: number): void => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setHistory(newHistory.concat([
            {
                squares: squares
            }
        ]));
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step: number): void => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0)
    };


    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <button key={move} onClick={() => jumpTo(move)} className="move">{desc}</button>
        );
    });

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div id="game">
            <div>
                <Board
                    squares={current.squares}
                    onClick={i => handleClickOnSquare(i)}
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
