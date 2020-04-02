class Slider{
	constructor(){
		this.x = 0;
		this.y = gh - 1;
		this.width = 4
		this.dir = 'r'
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
			console.log("test");
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
		}
		if(this.y % 3 == 0){
			speed -= 1;
		}
		this.y -= 1;
		this.x = 0;
	}
}
