import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ColorBox.scss'
const getRandomColor = () => {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

const ColorBox = () => {
  // const initialColor = localStorage.getItem('box_color') || 'deeppink';
  const [color, setColor] = useState(() =>
    localStorage.getItem('box_color') || 'deeppink'
  );
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor)
  }
  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
    </div>
  )
}

ColorBox.propTypes = {

}

export default ColorBox
