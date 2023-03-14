import "./LevelSelect.css";

const LevelSelect = ({ activeLevel, handleChange, levels, onStart }) => {
  return (
    <div className="control-panel">
      <select className="select" value={activeLevel} onChange={handleChange}>
        <option className="select-item" value={0} disabled>
          Pick mode
        </option>
        {levels &&
          levels.map(({ field, name, id }) => (
            <option className="select-item" value={field} key={id}>
              {name}
            </option>
          ))}
      </select>

      <button
        className="start-button"
        onClick={onStart}
        disabled={!activeLevel}
      >
        START
      </button>
    </div>
  );
};

export default LevelSelect;
