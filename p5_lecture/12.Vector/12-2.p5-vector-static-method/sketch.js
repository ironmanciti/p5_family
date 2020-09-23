let w;

function setup(){
  createCanvas(640, 360);
  w = new Walker();
}

function draw(){
  background(51);
  w.walk();
  w.display();
}

class Walker{
  constructor(){
    //walker 위치 vector
    this.pos = createVector(width/2, height/2);
  }
  walk(){
    //random vector
    // this.vel = createVector(random(-5, 5), random(-5, 5));
    this.vel = p5.Vector.random2D().mult(5);
    //walker 의 위치 vector update
    this.pos.add(this.vel);
  }
  display(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}

