import { useState } from "react";
import "./App.scss";

function App() {
  const [shape, setShape] = useState(true);

  const change = () => {
    setShape((shape) => !shape);
  };

  const [color, setColor] = useState(true);
  const changeColor = () => {
    setColor((color) => !color);
  };

  return (
    <>
      <button className="btn" onClick={change}>
        CHANGE
      </button>
      <button className="btn" onClick={changeColor}>
        COLOR
      </button>
      <div
        className="circle"
        style={{
          borderRadius: shape ? "50%" : "0%",
          backgroundColor: color ? "skyblue" : "red",
        }}
      ></div>
    </>
  );
}

export default App;
