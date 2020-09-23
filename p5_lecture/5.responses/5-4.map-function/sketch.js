function setup() {
  createCanvas(480, 240);
  strokeWeight(12);
}

function draw() {
  background(204);
  stroke(255);
  line(120, 60, mouseX, mouseY); // White line

  let mc = map(mouseX, 0, width, 0, 255);
  let c = color(mc, 0, 0);
  stroke(c)
  let mx = map(mouseX, 0, width, width * 0.5, width);
  line(120, 60, mx, mouseY);      // Red line
}

