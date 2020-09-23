let bug;

function setup() {
  createCanvas(480, 360);
  background(204);
  // Create object and pass in parameters
  bug = new JitterBug(width/2, height/2, 40);
}

function draw() {
  bug.move();
  bug.display();
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

