function setup(){
  createCanvas(600, 600);
  fill(0, 102);
  stroke(0, 102);
}

function draw(){
  const weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

