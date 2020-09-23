function setup(){
  createCanvas(600, 600);
  background(102);
  stroke(0, 102);
}

function draw(){
  rotate(mouseX / 100.0);  //반드시 소수점 포함 --> float
  rect(150, 150, 300, 40);

  rect(-150, -20, 300, 40);
}

