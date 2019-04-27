import React from 'react';
let currentFigure = 0,
		figureBody = 0,
		rotate = 1,
		i = 0,
		score = 0;
function Tetris () {
  let gridArray = [];
  for (let i = 0; i < 240; i++) {
    gridArray.push(React.createElement('div', {class: 'excel'}, ''));
  }

  return (
    <div>
      <div className="main">
        <div className="tetris">
          {gridArray}
        </div>
      </div>
      <input className="total" type="text" readOnly></input>
    </div>
  )
}
export default Tetris;