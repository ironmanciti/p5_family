let angle = 0.0;
let offset = 160;
let scalar = 90;
let speed = 0.05;

function setup() {
  createCanvas(640, 480);
  background(204);
}

function draw() {
  let x = offset + cos(angle) * scalar;  //-scalar ~ scalar
  let y = offset + sin(angle) * scalar;
  ellipse( x, y, 100, 100);
  angle += speed;
}

