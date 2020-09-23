function setup() {
  createCanvas(600, 600);
  strokeWeight(2);
}

function draw() {
  background(204);
  for (let i = 20; i <= 400; i += 20) {
    line(i, 40, i + 60, 80);

    line(i, 140, i + i/2, 180);
    line(i + i/2, 180, i * 1.2, 240);
  }
}

