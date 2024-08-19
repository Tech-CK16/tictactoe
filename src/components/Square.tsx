import React from 'react';

type ISquareProps = {
    onClick: () => void;
    value: 'X' | 'O' | null;
    winner: string | null;
};
const Square: React.FC<ISquareProps> = ({ onClick, value, winner }) => {
    if (!value) {
        return (
            <button
                className="board-square"
                onClick={onClick}
                disabled={Boolean(winner)}
            >
                {value}
            </button>
        );
    }
    return (
        <button
            className={`board-square square_${value.toLowerCase()}`}
            disabled
        >
            {value}
        </button>
    );
};

export default Square;
