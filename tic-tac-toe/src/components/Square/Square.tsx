import { SquareValue } from '../../gameTypes';
import './Square.css';

interface SquareProps {
    onClick(): void;
    value: SquareValue;
}

const Square = ({ onClick, value }: SquareProps) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};


export default Square;