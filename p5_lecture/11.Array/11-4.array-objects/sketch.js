let bugs = [];

function setup(){
  createCanvas(640, 480);
  background(204);
  for (let i = 0; i < 35; i++){
    let x = random(width);
    let y = random(height);
    bugs[i] = new JitterBug(x, y, i + 2);
  }
}

function draw(){
  for (let i = 0; i < bugs.length; i++){
    bugs[i].move();
    bugs[i].display();
  }
}

class JitterBug {
  constructor(tempX, tempY, tempDiameter){
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = 5;
  }
  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}