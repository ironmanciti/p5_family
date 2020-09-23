function setup() {
  createCanvas(360, 360);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);

  scalar = mouseX / 60.0;
  scale(scalar);

  strokeWeight(1.0 / scalar)
  rect(-15, -15, 30, 30);
}

