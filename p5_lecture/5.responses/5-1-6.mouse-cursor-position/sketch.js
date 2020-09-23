let x;
let offset = 20;

function setup() {
  createCanvas(480, 360);
  x = width/2;
}

function draw() {
  background(204);
  if (mouseX > x) {
    x += 0.5;
    offset = -20;
  }
  if (mouseX < x) {
    x -= 0.5;
    offset = 20;
  }
  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  line(mouseX, mouseY, mouseX + offset*3, mouseY);
}





