let blockSize;
let grid;
let gw = 8;
let gh = 12;
let slider;
let tik = 0;
let speed = 5;

function setup(){
	createCanvas(400, 600);
	blockSize = width / 8;
	colorMode(HSB);
	stroke(255);
	textAlign(CENTER);
	reset();
}

function draw(){
	if(tik % speed == 0){
		background(0);
		fillGrid();
		slider.draw();
		slider.update();
		drawEmptyGrid();
		slider.lose();
	}
	tik += 1;
	tik = tik % 10000;
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
				c = getColor(i, j, 10);
			}
			fill(c);
			drawBlock(i,j);
		}
	}
}

function getColor(i, j, b = 100){
	return color(map(i + j, 0, gw + gh, 0, 360), 100, b);
}

function drawBlock(i, j){
	let x = j * blockSize;
	let y = i * blockSize;
	rect(x, y, blockSize);
}

function keyPressed(){
	if(key == ' '){
		slider.drop();
	}else if(key == 'r'){
		reset();
	}
}

function mousePressed(){
	slider.drop();
}

function reset(){
	grid = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
	];
	slider = new Slider();
}
