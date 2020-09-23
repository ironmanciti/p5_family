let mover;
const radius = 18;

function setup(){
  createCanvas(480, 480);
  mover = new Mover(width/2, height/2);
}

function draw(){
  background(0);

  let gravity = createVector(0, 0.01);

  mover.applyForce(gravity);
  mover.update();
  mover.show();
  mover.edgeCheck();
}

class Mover{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);  
  }
  applyForce(gravity){
    this.acc.add(gravity);
  }
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  show(){
    stroke(255);
    strokeWeight(2);
    fill(266, 100);
    ellipse(this.pos.x, this.pos.y, radius * 2, radius * 2);
  }
  edgeCheck(){
    if (this.pos.y > height - radius){
      this.pos.y = height - radius;
      this.vel.y *= -1;
    }
  }
}


