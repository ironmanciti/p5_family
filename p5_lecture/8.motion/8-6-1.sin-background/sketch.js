let angle = 0.0;

function setup() {
  createCanvas(480, 240);
}

function draw() {
  let sinval = sin(angle);
  console.log(sinval);
  let gray = map(sinval, -1, 1, 0, 255);
  background(gray);
  angle += 0.1;
}


