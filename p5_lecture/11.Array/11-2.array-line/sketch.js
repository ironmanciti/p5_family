let gray = [];

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < width; i++) {
    gray[i] = random(0, 255);
  }
}

function draw() {
  background(204);
  for (let i = 0; i < gray.length; i++) {
    stroke([gray[i]]);
    line(i, 0, i, height);
  }
}

