let num = 100;
let x = [];
let y = [];

function setup() {
  createCanvas(640, 480);
  noStroke();
  //초기화
  for (let i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(0);
  // Copy array values from back to front
  for (let i = x.length-1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  x[0] = mouseX; // Set the first element
  y[0] = mouseY; // Set the first element

  for (let i = 0; i < x.length; i++) {
    fill(255 / (i+1));   
    ellipse(x[i], y[i], 40, 40);
  }
}

