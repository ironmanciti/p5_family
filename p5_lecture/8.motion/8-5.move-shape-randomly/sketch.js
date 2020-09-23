const speed = 10;
const diameter = 60;
let x;
let y;

function setup() {
  createCanvas(480, 240);
  background(204);
  x = width/2;
  y = height/2;
}

function draw() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  ellipse(x, y, diameter, diameter);
}

