class Slider{
	constructor(){
		this.x = 0;
		this.y = gh - 1;
		this.width = 4;
		this.dir = 'r';
		this.done == false;
		this.victory = true;
	}

	draw(){
		for(let i = 0; i < this.width; i++){
			fill(getColor(this.y, this.x + i, 80));
			drawBlock(this.y, this.x + i)
		}
	}

	update(){
		if(this.dir == 'r'){
			this.x += 1;
			if(this.x + this.width > gw){
				this.x -= 1;
				this.dir = 'l'
			}
		} else if(this.dir === 'l'){
			this.x -= 1;
			if(this.x < 0){
				this.x += 1;
				this.dir = 'r';
			}
		}
	}

	drop(){
		if(!this.done){
			let w = this.width
			for(let i = 0; i < w; i++){
				grid[this.y][this.x + i] = 1
				if(this.y < gh -1){
					if(grid[this.y + 1][this.x + i] == 0){
						this.width -= 1;
						grid[this.y][this.x + i] = 0;
					}
				}
			}
			if(this.y % 3 == 0){
				speed -= 1;
			}
			this.y -= 1;
			this.x = 0;
		}
	}

	lose(){
		if(this.width == 0 && !this.done){
			this.done = true;
			this.victory = false;
		}
	}

	win(){
		if(this.y < 0 && !this.done){
			this.done = true;
			this.victory = true;
		}
	}
	drawGameOver(){
		if(this.done){
			if(this.victory){
				Slider.gameOverMessage("You Win!", "press 'r' to restart");
			}else{
				Slider.gameOverMessage("You Lose!", "press 'r' to restart");
			}
		}
	}

	static gameOverMessage(str1, str2){
			fill(0);
			stroke(255);
			this.lost = true;
			textSize(70);
			text(str1, width/2, height/2);
			textSize(30);
			text(str2, width/2, height/2 + 40);
	}
}
