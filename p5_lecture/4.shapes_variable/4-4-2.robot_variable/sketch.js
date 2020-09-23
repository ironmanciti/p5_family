let x = 60;            // X-coordinate
let y = 390;           // Y-coordinate
let bodyHeight = 180;  // Body Height
let neckHeight = 40;  // Neck Height
let diameter = 80;       // 머리 크기
let ny = y - bodyHeight - neckHeight - diameter/2;  // Neck Y

function setup() {
  createCanvas(170, 480);
  strokeWeight(2);
  ellipseMode(diameter);
}

function draw() {
  background(204);

  // Neck
  stroke(102);
  line(x+2, y-bodyHeight, x+2, ny); 
  line(x+12, y-bodyHeight, x+12, ny); 
  line(x+22, y-bodyHeight, x+22, ny); 

  // Antennae
  line(x+12, ny, x-18, ny-43);
  line(x+12, ny, x+42, ny-99);
  line(x+12, ny, x+78, ny+15);

  // Body
  noStroke();
  fill(102);
  ellipse(x, y-33, 33, 33);
  fill(0);
  rect(x-45, y-bodyHeight, 90, bodyHeight-33);
  fill(102);
  rect(x-45, y-bodyHeight+17, 90, 6);

  // Head
  fill(0);
  ellipse(x+12, ny, diameter, diameter); 
  fill(255);
  ellipse(x+24, ny-6, 14, 14);
  fill(0);
  ellipse(x+24, ny-6, 3, 3);
  fill(153);
  ellipse(x, ny-8, 5, 5);
  ellipse(x+30, ny-26, 4, 4);
  ellipse(x+41, ny+6, 3, 3);
}

function keyReleased(){
  if (key === '1'){
    y = 460
    bodyHeight = 260;  
    neckHeight = 95;   
  }
  if (key === '2'){
    y = 310
    bodyHeight = 80;  
    neckHeight = 10;   
  }
  if (key === '3'){
    y = 420
    bodyHeight = 110;  
    neckHeight = 140;   
  }
}