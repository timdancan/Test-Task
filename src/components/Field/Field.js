import {useMemo} from "react";
import Square from "../Square/Square";
import './Field.css'

const Field = ({
                   fields,
                   highlightedSquares,
                   setHighlightedSquares,
               }) => {
    const elements = useMemo(() => {
        setHighlightedSquares([])
        if (!fields) {
            return [];
        }
        return Array(fields).fill(Array(fields).fill(0))
    }, [fields]);

    return (
        <div className='field'>
            {elements && elements.map((row, rowIndex) => (
                <div className='field__row' key={rowIndex}>
                    {row.map((id, colIndex) => {
                        const position = `row ${rowIndex + 1} col ${colIndex + 1}`;
                        const isHighlighted = highlightedSquares.includes(position);
                        return (
                        <Square
                            key={`${rowIndex}${colIndex}`}
                            isHighlighted={isHighlighted}
                            setHighlightedSquares={setHighlightedSquares}
                            position={position}
                            fields={fields}
                        />
                    )})}
                </div>))}
        </div>
    );
};

export default Field;