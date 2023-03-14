import "./HoveredList.css";

const HoveredList = ({ highlightedSquares }) => {
  return (
    <div className="hovered-squares">
      <h2 className="hovered-squares__title">Hovered squares:</h2>
      <ul className="hovered-squares__list">
        {highlightedSquares.map((el) => {
          return (
            <li className="hovered-squares__item" key={el}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HoveredList;
