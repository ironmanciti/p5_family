let angle = 0.0;
let offset = 150;
let scalar = 80;
let speed = 0.05;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
  let y1 = offset + sin(angle) * scalar;
  let y2 = offset + sin(angle + 0.4) * scalar;
  let y3 = offset + sin(angle + 0.8) * scalar;
  ellipse(120, y1, 80, 80);   // x 는 고정. y 만 wave
  ellipse(220, y2, 80, 80);
  ellipse(320, y3, 80, 80);
  angle += speed;
}

