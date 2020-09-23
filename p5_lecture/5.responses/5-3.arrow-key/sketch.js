let x = 215;
let y = 45;

function setup() {
  createCanvas(480, 480);
}

function draw() {
  background(0);

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {           
      x--;
    } else if (keyCode === RIGHT_ARROW) {      
      x++;
    } else if (keyCode === UP_ARROW) {
      y--;
    } else if (keyCode === DOWN_ARROW) {
      y++;
    }
  }
  fill(255, 0, 0);
  rect(x, y, 50, 50);
}

