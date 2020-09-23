let angle = 0.0;
let offset = 160;
let scalar = 5;
let speed = 0.05;

function setup() {
  createCanvas(640, 480);
  fill(0);
  background(204);
}

function draw() {
  let x = offset + cos(angle) * scalar;  //-scalar ~ scalar
  let y = offset + sin(angle) * scalar;
  ellipse(x, y, 5, 5);
  angle += speed;
  scalar += speed * 2;  // 이동 반경 증가
}

