let blockSize;
let grid = [
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1],
];
let gw = 8;
let gh = 12;

function setup(){
	createCanvas(400, 600);
	blockSize = width / 8;
	colorMode(HSB);
	stroke(255);
}

function draw(){
	background(0);
	fillGrid();
	drawEmptyGrid();
}

function drawEmptyGrid(){
	for(let i = height; i >= 0; i -= blockSize){
		line(0, i, width, i);
	}
	for(let i = 0; i <= width; i += blockSize){
		line(i, 0, i, height);
	}
}

function fillGrid(){
	for(let i = 0; i < gh; i++){
		for(let j = 0; j < gw; j++){
			let c;
			if (grid[i][j] == 1) {
				c = getColor(i, j);
			} else {
				c = getColor(i, j, 15);
			}
			fill(c);
			let x = j * blockSize;
			let y = i * blockSize;
			rect(x, y, blockSize);
		}
	}
}

function getColor(i, j, b = 100){
	return color(map(i + j, 0, gw + gh, 0, 360), 100, b);
}
