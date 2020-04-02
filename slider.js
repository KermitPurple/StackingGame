class Slider{
	constructor(){
		this.x = 0;
		this.y = gh - 1;
		this.width = 4
		this.dir = 'r'
		this.lost = false
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
		for(let i = 0; i < this.width; i++){
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

	lose(){
		if(this.width == 0){
			fill(0);
			stroke(255);
			this.lost = true;
			textSize(70);
			text("Game Over", width/2, height/2);
			textSize(30);
			text("press 'r' to restart", width/2, height/2 + 40);
		}
	}
}
