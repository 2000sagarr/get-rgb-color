import React, { useState } from "react";
import Color from "./components/Color";
import ColorForm from "./components/ColorForm";

function App() {
  const [red, setRedValue] = useState(0);
  const [green, setGreenValue] = useState(0);
  const [blue, setBlueValue] = useState(0);

  const getColor = (redColor, greenColor, blueColor) => {
    setRedValue(redColor);
    setGreenValue(greenColor);
    setBlueValue(blueColor);
  };
  return (
    <div>
      <h1>RGC Color</h1>
      <ColorForm getColor={getColor} />
      <h3>
        RGB( {red}, {green}, {blue} )
      </h3>
      <Color red={red} green={green} blue={blue} />
    </div>
  );
}

export default App;
