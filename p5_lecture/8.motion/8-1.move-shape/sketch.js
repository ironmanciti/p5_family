let radius = 40;
let x = -radius;
let speed = 2;

function setup() {
  createCanvas(640, 480);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed;
  if (x >  width+radius){
    x = -radius;
  }
  arc(x, 60, radius, radius, 0.52, 5.76);  //start, end radian
  arc(x, 160, radius, radius, 0, PI);      //0, 3.14
  arc(x, 260, radius, radius, 0, PI/2);
}