import { SquareValue } from '../../gameTypes';
import './Square.css';

interface SquareProps {
    onClick(): void;
    value: SquareValue;
}

const Square = (props: SquareProps) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
};


export default Square;