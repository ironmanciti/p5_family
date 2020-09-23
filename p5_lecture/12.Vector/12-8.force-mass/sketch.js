let mover1;
let mover2;
let gravity;

function setup(){
  createCanvas(480, 480);
  mover1 = new Mover(width * 0.25, 0, 18);  // 질량이 다른 두 물체
  mover2 = new Mover(width * 0.75, 0, 36);
  gravity = createVector(0, 0.2);
}

function draw(){
  background(0);
  mover1.applyForce(gravity);
  mover2.applyForce(gravity);

  if (mouseIsPressed){
    
  }


  mover1.update();
  mover1.show();
  mover1.edgeCheck();
  
  mover2.update();
  mover2.show();
  mover2.edgeCheck();
}

class Mover{
  constructor(x, y, r){
    this.radius = r;
    this.mass = r;
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


