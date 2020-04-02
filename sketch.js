let blockSize;

function setup(){
	createCanvas(400, 600);
	blockSize = width / 8;
	stroke(255);
}

function draw(){
	background(0);
	drawGrid();
}

function drawGrid(){
	for(let i = height; i >= 0; i -= blockSize){
		line(0, i, width, i);
	}
	for(let i = 0; i <= width; i += blockSize){
		line(i, 0, i, height);
	}
}
