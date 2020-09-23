function setup() {
  createCanvas(480, 240);
  frameRate(5);
}

function draw() {
  background(204);
  for (let x = 20; x < width; x += 20){
    let mx = mouseX / 10;
    let offsetA = random(-mx, mx);
    let offsetB = random(-mx, mx);
    line(x + offsetA, 40, x + offsetB, 100);
  }
}

