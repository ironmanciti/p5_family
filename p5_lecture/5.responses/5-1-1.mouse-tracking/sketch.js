function setup(){
  createCanvas(480, 360);
  fill(0, 102);
  stroke(0, 102);
}

function draw(){
  ellipse(mouseX, mouseY, 9, 9);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

