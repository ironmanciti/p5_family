function setup(){
  createCanvas(600, 600);
  background(204);
  fill(0, 102);
  stroke(0, 102);
}

function draw(){
  push();
  translate(width/2, height/2)
  rect(0, 0, 90, 90);
  pop();

  push();
  translate(mouseX, mouseY);
  noFill();
  rect(0, 0, 30, 30);
  pop();
}

