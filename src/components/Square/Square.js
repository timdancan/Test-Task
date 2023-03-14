import "./Square.css";

const Square = ({ setHighlightedSquares, position, isHighlighted }) => {
  const mouseOverHandler = () => {
    if (isHighlighted) {
      setHighlightedSquares((prevState) =>
        prevState.filter((item) => item !== position)
      );
    } else {
      setHighlightedSquares((prevState) => [...prevState, position]);
    }
  };

  return (
    <div
      className={`square ${isHighlighted ? "square--blue" : ""}`}
      onMouseOver={mouseOverHandler}
    ></div>
  );
};

export default Square;
