let overlay = document.querySelector('.overlay'),
		modal = document.querySelector('.modal'),
		speed = 0;

modal.addEventListener('click', function(e) {
	if (e.target.classList.contains('easy')) {
		speed = 1000;
	} else if (e.target.classList.contains('normal')) {
			speed = 500;
	} else if (e.target.classList.contains('hard')) {
			speed = 200;
	}
	if (e.target.classList.contains('button')) {
		modal.style.display = 'none';
		overlay.style.display = 'none';
		startGame();
	}
});

function startGame() {
let tetris = document.createElement('div'),
		currentFigure = 0,
		figureBody = 0,
		rotate = 1,
		i = 0,
		score = 0,
		input = document.getElementsByTagName('input')[0];
tetris.classList.add('tetris');

for (let i = 0; i < 240; i++) {
	let excel = document.createElement('div');
	excel.classList.add('excel');
	tetris.appendChild(excel);
}

let main = document.getElementsByClassName('main')[0];
main.appendChild(tetris);

let excel = document.getElementsByClassName('excel');

for (let y = 24; y > 0; y--) {
	for (let x = 1; x < 11; x++) {
		excel[i].setAttribute('posX', x);
		excel[i].setAttribute('posY', y);
		i++;
	}
}

let x = 5, y = 21;
// All figures
let mainArr = [
	[
			[0, 1],
			[0, 2],
			[0, 3],
			[
					[-1, 1],
					[0, 0],
					[1, -1],
					[2, -2]
			],
			[
					[1, -1],
					[0, 0],
					[-1, 1],
					[-2, 2]
			],
			[
					[-1, 1],
					[0, 0],
					[1, -1],
					[2, -2]
			],
			[
					[1, -1],
					[0, 0],
					[-1, 1],
					[-2, 2]
			]
	],
	[
			[1, 0],
			[0, 1],
			[1, 1],
			[
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0]
			],
			[
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0]
			],
			[
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0]
			],
			[
					[0, 0],
					[0, 0],
					[0, 0],
					[0, 0]
			]
	],
	[
			[1, 0],
			[0, 1],
			[0, 2],
			[
					[0, 0],
					[-1, 1],
					[1, 0],
					[2, -1]
			],
			[
					[1, 0],
					[1, 0],
					[-1, 1],
					[-1, 1]
			],
			[
					[-1, 0],
					[0, -1],
					[2, -2],
					[1, -1]
			],
			[
					[0, 0],
					[0, 0],
					[-2, 1],
					[-2, 1]
			]
	],
	[
			[1, 0],
			[1, 1],
			[1, 2],
			[
					[0, 0],
					[0, 0],
					[1, -1],
					[-1, -1]
			],
			[
					[0, 0],
					[-1, 1],
					[-2, 2],
					[1, 1]
			],
			[
					[2, 0],
					[0, 0],
					[1, -1],
					[1, -1]
			],
			[
					[-2, 1],
					[1, 0],
					[0, 1],
					[-1, 2]
			]
	],
	[
			[1, 0],
			[-1, 1],
			[0, 1],
			[
					[0, -1],
					[-1, 0],
					[2, -1],
					[1, 0]
			],
			[
					[0, 0],
					[1, -1],
					[-2, 0],
					[-1, -1]
			],
			[
					[0, -1],
					[-1, 0],
					[2, -1],
					[1, 0]
			],
			[
					[0, 0],
					[1, -1],
					[-2, 0],
					[-1, -1]
			]
	],
	[
			[1, 0],
			[1, 1],
			[2, 1],
			[
					[2, -1],
					[0, 0],
					[1, -1],
					[-1, 0]
			],
			[
					[-2, 0],
					[0, -1],
					[-1, 0],
					[1, -1]
			],
			[
					[2, -1],
					[0, 0],
					[1, -1],
					[-1, 0]
			],
			[
					[-2, 0],
					[0, -1],
					[-1, 0],
					[1, -1]
			]
	],
	[
			[1, 0],
			[2, 0],
			[1, 1],
			[
					[1, -1],
					[0, 0],
					[0, 0],
					[0, 0]
			],
			[
					[0, 0],
					[-1, 0],
					[-1, 0],
					[1, -1]
			],
			[
					[1, -1],
					[1, -1],
					[1, -1],
					[0, 0]
			],
			[
					[-2, 0],
					[0, -1],
					[0, -1],
					[-1, -1]
			]
	]
];
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
		figureBody[i].classList.add('figure', 'color-' + currentFigure);
	}
}
create();
input.value = `Your score: ${score}`;

function move() {
	let moveFlag = true;
	let coordinates = [
		[figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
		[figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
		[figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
		[figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')],
	];
	for (let i = 0; i < coordinates.length; i++) {
		if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1] - 1}"]`).classList.contains('set')) {
			moveFlag = false;
			break;
		}
	}

	if (moveFlag) {
		for (let i = 0; i < figureBody.length; i++) {
			figureBody[i].classList.remove('figure', 'color-' + currentFigure);
		}
		figureBody = [
			document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] - 1}"]`),
			document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] - 1}"]`),
			document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] - 1}"]`),
			document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] - 1}"]`),
		];
		for (let i = 0; i < figureBody.length; i++) {
			figureBody[i].classList.add('figure', 'color-' + currentFigure);
		}
	} else {
		// Остановка
		for (let i = 0; i < figureBody.length; i++) {
			figureBody[i].classList.remove('figure');
			figureBody[i].classList.add('set');
		}
		score += 1;
		input.value = `Your score: ${score}`;
		// Линия собрана
		for (let i = 1; i < 21; i++) {
			let count = 0;
			for (let k = 1; k < 11; k++) {
				if (document.querySelector(`[posX="${k}"][posY="${i}"]`).classList.contains('set')) {
					count++;
					if (count == 10) {
						score += 10;
						input.value = `Your score: ${score}`;
						// Удаление линии
						for (let m = 1; m < 11; m++) {
							document.querySelector(`[posX="${m}"][posY="${i}"]`).classList.remove('set', 'color-0', 'color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6');
						}
						// Перемещаем все вниз
						let set = document.querySelectorAll('.set');
						let newSet = [];
						let colors = [];
						for (let s = 0; s < set.length; s++){
							let setCoordinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')];
							if (setCoordinates[1] > i) {
								colors.push();
								if(set[s].classList.contains('color-0')) {colors.push('color-0'); set[s].classList.remove('color-0');}
								else if(set[s].classList.contains('color-1')) {colors.push('color-1'); set[s].classList.remove('color-1');}
								else if(set[s].classList.contains('color-2')) {colors.push('color-2'); set[s].classList.remove('color-2');}
								else if(set[s].classList.contains('color-3')) {colors.push('color-3'); set[s].classList.remove('color-3');}
								else if(set[s].classList.contains('color-4')) {colors.push('color-4'); set[s].classList.remove('color-4');}
								else if(set[s].classList.contains('color-5')) {colors.push('color-5'); set[s].classList.remove('color-5');}
								else if(set[s].classList.contains('color-6')) {colors.push('color-6'); set[s].classList.remove('color-6');}
								set[s].classList.remove('set');
								newSet.push(document.querySelector(`[posX="${setCoordinates[0]}"][posY="${setCoordinates[1]-1}"]`));
								console.log(colors);
							}
						}
						for (let a = 0; a < newSet.length; a++) {
							newSet[a].classList.add('set', colors[a]);
						}
						i--;
					}
				}
			}
		}
		for (let n = 1; n < 11; n++) {
			if (document.querySelector(`[posX="${n}"][posY="21"]`).classList.contains('set')) {
				clearInterval(interval);
				alert(`GAME OVER. YOUR SCORE: ${score}`);
				break;
			}
		}
		create();
	}
}

let interval = setInterval(() => {
	move();
}, speed);

let flag = true;

window.addEventListener('keydown', function (e) {
	let coordinates1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
			coordinates2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
			coordinates3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
			coordinates4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')];

	function getNewState(a) {

		flag = true;

		let figureNew = [
			document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
			document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
			document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
			document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`),
		];

		for (let i = 0; i < figureNew.length; i++) {
			if (!figureNew[i] || figureNew[i].classList.contains('set')) {
				flag = false;
			}
		}

		if (flag) {
			for (let i = 0; i < figureBody.length; i++) {
				figureBody[i].classList.remove('figure', 'color-' + currentFigure);
			}

			figureBody = figureNew;

			for (let i = 0; i < figureBody.length; i++) {
				figureBody[i].classList.add('figure', 'color-' + currentFigure);
			}
		}
	}

	if (e.keyCode == 37) {
		getNewState(-1);
	} else if (e.keyCode == 39) {
		getNewState(1);
	} else if (e.keyCode == 40) {
		move();
	} else if (e.keyCode == 38) {
		flag = true;

		let figureNew = [
			document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentFigure][rotate + 2][0][1]}"]`),
			document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY = "${+coordinates2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),
			document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY = "${+coordinates3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),
			document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY = "${+coordinates4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`),
		];

		for (let i = 0; i < figureNew.length; i++) {
			if (!figureNew[i] || figureNew[i].classList.contains('set')) {
				flag = false;
			}
		}

		if (flag) {
			for (let i = 0; i < figureBody.length; i++) {
				figureBody[i].classList.remove('figure', 'color-' + currentFigure);
			}

			figureBody = figureNew;

			for (let i = 0; i < figureBody.length; i++) {
				figureBody[i].classList.add('figure', 'color-' + currentFigure);
			}

			if (rotate < 4){
				rotate++;
			} else {
				rotate = 1;
			}
		}
	}
});
}