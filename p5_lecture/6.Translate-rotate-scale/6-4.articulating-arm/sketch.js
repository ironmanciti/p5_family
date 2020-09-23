let angle = 0.0;
let angleDirection = 1;
let speed = 0.005;

function setup() {
  createCanvas(360, 360);
}

function draw() {
  background(204);
  translate(60, 75);  // Move to start position
  rotate(angle);
  strokeWeight(36);
  line(0, 0, 120, 0);
  translate(120, 0);   // Move to next joint
  rotate(angle * 2.0);
  strokeWeight(18);
  line(0, 0, 90, 0);
  translate(90, 0);   // Move to next joint
  rotate(angle * 2.5);
  strokeWeight(9);
  line(0, 0, 60, 0);

  angle += speed * angleDirection;
  if ((angle > QUARTER_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
}
