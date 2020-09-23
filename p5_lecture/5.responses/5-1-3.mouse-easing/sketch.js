let x = 0;
let y = 0;
let easing = 0.01;

function setup(){
  createCanvas(480, 360);
}

function draw(){
  const targetX = mouseX;
  const targetY = mouseY;
  x += (targetX - x) * easing;
  y += (targetY - y) * easing;
  ellipse(x, y, 20, 20);
}



