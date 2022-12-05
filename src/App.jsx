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

  console.log(stroke);

  const remove = () => {
    setStroke((s) => [...s].slice(0, -1));
  };

  const rotateLeft = () => {
    setStroke((s) => [
      ...s,
      { transform: `rotate(-${stroke.length * 10}deg)` },
    ]);
  };

  const rotateRight = () => {
    setStroke((s) => [...s, { transform: `rotate(${stroke.length * 10}deg)` }]);
  };

  return (
    <>
      <div className="bin">
        {stroke.map((s, i) => {
          console.log(stroke);
          <div key={i} className="stroke" s={s}></div>;
        })}
      </div>

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
