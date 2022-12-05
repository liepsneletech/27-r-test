import { useState } from "react";
import "./App.scss";

function App() {
  const [stroke, setStroke] = useState([]);

  const add = () => {
    setStroke((s) => [
      ...s,
      {
        transform: `rotate(${stroke.length * 10}deg)`,
      },
    ]);
  };

  const remove = () => {
    setStroke((s) => [...s].slice(0, -1));
  };

  const rotateLeft = () => {
    setStroke(() => [
      ...stroke,
      {
        transform: `rotate(-10deg)`,
      },
    ]);
  };

  const rotateRight = () => {
    setStroke((s) => [
      ...s,
      {
        transform: `rotate(10deg)`,
      },
    ]);
  };

  return (
    <>
      <div className="bin">
        {stroke.map((s, i) => (
          <div key={i} className="stroke" style={s}></div>
        ))}
      </div>

      {console.log(stroke)}

      <div className="btns-container">
        <button className="btn" onClick={add}>
          ADD
        </button>
        <button className="btn" onClick={remove}>
          REMOVE
        </button>
        <button className="btn" onClick={rotateLeft}>
          LEFT
        </button>
        <button className="btn" onClick={rotateRight}>
          RIGHT
        </button>
      </div>
    </>
  );
}

export default App;
