let w;

function setup(){
  createCanvas(640, 360);
  w = new Walker();
}

function draw(){
  background(201);
  w.walk();
  w.display();
}

class Walker{
  constructor(){
    this.pos = createVector(width/2, height/2);
  }
  walk(){
    this.pos.x = this.pos.x + random(-5, 5);
    this.pos.y = this.pos.y + random(-5, 5);
  }
  display(){
    fill(255);
    // ellipse(this.pos.x, this.pos.y, 48, 48);
    stroke(0);
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
  }
}

