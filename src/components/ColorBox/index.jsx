import React, { useState } from 'react';

ColorBox.propTypes = {
  
};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'red', 'blue'];
  const randomIndex = Math.trunc(Math.random()*5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor]  = useState('deeppink');

  function handleBoxClick() {
    // get random color 
    const newColor = getRandomColor();
    setColor(newColor)
  }
  return (
    <div className="color-box" style={{backgroundColor: color}} onClick={handleBoxClick}>
      COLOR BOX
    </div>
  );
}

export default ColorBox;