let x = 0;
let y = 0;
let px = 0; // 이전 mouseX 좌표
let py = 0; // 이전 mouseY 좌표
let easing = 0.1;

function setup(){
  createCanvas(480, 360);
  stroke(0, 102);
}

function draw(){
  let targetX = mouseX;
  let targetY = mouseY;
  x += (targetX - x) * easing;
  y += (targetY - y) * easing;

  let weight = dist(x, y, px, py);
  strokeWeight(weight * 2);
  line(x, y, px, py);
  px = x;
  py = y;
}





