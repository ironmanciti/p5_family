let angle = 0.0;

function setup(){
  createCanvas(600, 600);
  background(204);
  stroke(0, 102);
}

function draw(){
  // translate(mouseX, mouseY);
  // rotate(angle);

  rotate(angle);
  translate(mouseX, mouseY);

  rect(-150, -20, 100, 100);
  angle += 1;
}

