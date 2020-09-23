function setup() {
  createCanvas(480, 120);
  noStroke();
}

function draw() {
  background(0);
  fill(255, 140);
  for (let x=0; x < width; x += 40){
    ellipse(x, 0, 40, 40);
  }

  for (let y=0; y < height; y += 40){
    ellipse(0, y, 40, 40);
  }
}



