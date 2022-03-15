import { SquareValue } from '../../squareTypes';
import './Square.css';

interface SquareProps {
    onClick(): void;
    value: SquareValue;
}

const Square: React.FC<SquareProps> = ({ onClick, value }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};


export default Square;