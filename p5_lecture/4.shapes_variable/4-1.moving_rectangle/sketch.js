let y = 60;
let d = 80;
let i = 0;

function setup() {
  createCanvas(720, 480);
}

function draw() {
  background(204);
  ellipse(75+i, y, d, d);
  ellipse(175+i, y, d, d);
  ellipse(275+i, y, d, d)
  y++;
  d++;
  i++;
}

