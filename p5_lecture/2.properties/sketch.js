function setup(){
  createCanvas(640, 480);
}

function draw(){
  background(0);
  fill(204);  //light gray
  ellipse(132, 82, 100, 100);
  fill(153);  //Medim gray
  ellipse(228, -16, 100, 100);
  fill(102);  //Dark ray
  ellipse(268, 118, 100, 100);

  fill(255, 0, 0);  //RED
  ellipse(132, 282, 100, 100);
  fill(0, 255, 0);  //GREEN
  ellipse(228, 216, 100, 100);
  fill(0, 0, 255, 100);  //Blue (R, G, B, A)
  ellipse(268, 218, 100, 100);
}