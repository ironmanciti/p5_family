function setup() {
  createCanvas(360, 360);
  background(204);
}

function draw() {
  push();
  translate(mouseX, mouseY);
  noFill();
  rect(0, 0, 60, 60);
  pop();

  translate(35, 10);
  fill(255, 0, 0);
  rect(0, 0, 30, 30);
}


