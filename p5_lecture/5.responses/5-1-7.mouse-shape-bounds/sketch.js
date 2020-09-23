let radius = 12;
let x = 180;
let y = 130;
let w = 80;
let h = 60;

function setup() {
  createCanvas(480, 240);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  let d = dist(120, 60, mouseX, mouseY);
  fill(255);
  if (d < radius) {
    radius++;
    fill(0);
  } 

  ellipse(120, 60, radius*2, radius*2);

  if ((mouseX > x) && (mouseX < x+w) &&
    (mouseY > y) && (mouseY < y+h)) {
    fill(0);
  } 
  else {
    fill(255);
  }
  rect(x, y, w, h);
}






