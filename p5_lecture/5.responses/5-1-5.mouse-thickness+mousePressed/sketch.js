function setup(){
  createCanvas(480, 360);
  strokeWeight(50);
}

function draw(){
  background(204);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed){
    if (mouseButton === LEFT){
      stroke(0);
    } else {
      stroke(255);
    } 
  }
  line(0, 120, width, 80);
}





