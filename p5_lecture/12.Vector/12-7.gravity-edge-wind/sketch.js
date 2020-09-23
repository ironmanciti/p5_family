let mover;
let gravity;
let wind;

function setup(){
  createCanvas(480, 480);
  mover = new Mover(0, 0);
  gravity = createVector(0, 0.2);
  wind = createVector(0.1, 0);
}

function draw(){
  background(0);
  mover.applyForce(gravity);
  mover.applyWind(wind);
  mover.update();
  mover.show();
  mover.edgeCheck();
}

class Mover{
  constructor(x, y){
    this.radius = 18;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);  
  }
  applyForce(gravity){
    this.acc.add(gravity);
  }
  applyWind(wind){
    this.acc.add(wind);
  }
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  show(){
    stroke(255);
    strokeWeight(2);
    fill(266, 100);
    ellipse(this.pos.x, this.pos.y, 
      this.radius * 2, this.radius * 2);
  }
  edgeCheck(){
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= -1;
    } else if (this.pos.x > width - this.radius){
      this.pos.x = width - this.radius;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - this.radius){
      this.pos.y = height - this.radius;
      this.vel.y *= -1;
    }
  }
}


