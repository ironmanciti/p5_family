let bug;
let jit;

function setup() {
  createCanvas(480, 360);
  background(204);
  // Create object and pass in parameters
  bug = new JitterBug(width * 0.33, height/2, 50);
  jit = new JitterBug(width * 0.66, height/2, 10);
}

function draw() {
  bug.move();
  bug.display();
  jit.move();
  jit.display();
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

