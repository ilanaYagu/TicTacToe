export type SquareValue = 'X' | 'O' | null;

export type GameBoard = {
    squares: SquareValue[];
}

export type HistoryGame = {
    gameBoards: GameBoard[];
}