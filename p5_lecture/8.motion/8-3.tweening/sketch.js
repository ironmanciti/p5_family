let startX = 120;     // Initial x-coordinate
let stopX = 360;     // Final x-coordinate
let startY = 130;     // Initial y-coordinate
let stopY = 280;      // Final y-coordinate
let x = startX;    // Current x-coordinate
let y = startY;    // Current y-coordinate
let step = 0.005;  // createCanvas of each step (0.0 to 1.0)
let pct = 0.0;     // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(480, 480);
}

function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((stopX-startX) * pct);
    y = startY + ((stopY-startX) * pct);
    pct += step;
  }
  ellipse(x, y, 50, 50);
}

