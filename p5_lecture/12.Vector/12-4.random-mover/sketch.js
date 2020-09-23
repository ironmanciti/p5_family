let mover;

function setup(){
  createCanvas(640, 360);
  mover = new Mover(width/2, height/2);
}

function draw(){
  background(0);
  mover.update();
  mover.show();
}

class Mover{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }
  update(){
    this.acc = p5.Vector.random2D();
    this.vel.add(this.acc);
    //속도가 무한히 증가하는 것을 방지
    this.vel.limit(2);
    //새로운 position
    this.pos.add(this.vel);
  }
  show(){
    stroke(255);
    strokeWeight(2);
    fill(266, 100);
    ellipse(this.pos.x, this.pos.y, 32, 32);
  }
}


