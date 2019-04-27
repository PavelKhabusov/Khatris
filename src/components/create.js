
import React from 'react';
import ReactDOM from 'react-dom';
let currentFigure = 0,
		figureBody = 0,
    i = 0,
    rotate = 1;
const Create = async () => {
  let excel = document.querySelectorAll('.excel');
  for (let y = 24; y > 0; y--) {
    for (let x = 1; x < 11; x++) {
      excel[i].setAttribute('posX', x);
      excel[i].setAttribute('posY', y);
      i++;
    }
  }

  let x = 5, y = 21;
  // All figures
  let mainArr=[[[0,1],[0,2],[0,3],[[-1,1],[0,0],[1,-1],[2,-2]],[[1,-1],[0,0],[-1,1],[-2,2]],[[-1,1],[0,0],[1,-1],[2,-2]],[[1,-1],[0,0],[-1,1],[-2,2]]],[[1,0],[0,1],[1,1],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]],[[1,0],[0,1],[0,2],[[0,0],[-1,1],[1,0],[2,-1]],[[1,0],[1,0],[-1,1],[-1,1]],[[-1,0],[0,-1],[2,-2],[1,-1]],[[0,0],[0,0],[-2,1],[-2,1]]],[[1,0],[1,1],[1,2],[[0,0],[0,0],[1,-1],[-1,-1]],[[0,0],[-1,1],[-2,2],[1,1]],[[2,0],[0,0],[1,-1],[1,-1]],[[-2,1],[1,0],[0,1],[-1,2]]],[[1,0],[-1,1],[0,1],[[0,-1],[-1,0],[2,-1],[1,0]],[[0,0],[1,-1],[-2,0],[-1,-1]],[[0,-1],[-1,0],[2,-1],[1,0]],[[0,0],[1,-1],[-2,0],[-1,-1]]],[[1,0],[1,1],[2,1],[[2,-1],[0,0],[1,-1],[-1,0]],[[-2,0],[0,-1],[-1,0],[1,-1]],[[2,-1],[0,0],[1,-1],[-1,0]],[[-2,0],[0,-1],[-1,0],[1,-1]]],[[1,0],[2,0],[1,1],[[1,-1],[0,0],[0,0],[0,0]],[[0,0],[-1,0],[-1,0],[1,-1]],[[1,-1],[1,-1],[1,-1],[0,0]],[[-2,0],[0,-1],[0,-1],[-1,-1]]]];
  function create() {
    function getRandom() {
      return Math.round(Math.random()*(mainArr.length-1));
    }
  
    rotate = 1;
    currentFigure = getRandom();
  
    figureBody = [
      document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
      document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
      document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
      document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`)
    ];
    for (let i = 0; i < figureBody.length; i++) {
      figureBody[i].classList.add('figure');
    }
  }
  create();

  return (
    <div>
    </div>
  )
}
export default Create;
