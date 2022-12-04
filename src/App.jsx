import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";

function App() {
  const [shape, setShape] = useState(true);

  const change = () => {
    setShape((shape) => !shape);
  };

  return (
    <>
      <button className="btn" onClick={change}>
        CHANGE
      </button>
      <div
        className="circle"
        style={{ borderRadius: shape ? "50%" : "0%" }}
      ></div>
    </>
  );
}

export default App;
