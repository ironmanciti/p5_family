function setup() {
  createCanvas(640, 480);
  textAlign(CENTER);
}

function draw() {
  background(204);
  line(20, 20, width/2-20, height/2-20);
  
  if (keyIsPressed) {
    line(width/2-20, 20, 20, height/2-20);

    textSize(64);
    fill(255, 0, 0);
    text(key, width/2, height/2);

    if (key === 'h' || key === 'H'){
      line(width/2 + 30, height/2 + 80, width/2 + 120, height/2 + 80);
    }
    if (key === 'n' || key === 'N'){
      line(width/2 + 30, height/2 + 20, width/2 + 120, height/2 + 150);
    } 
  }
  line(width/2 + 30, height/2 + 20, width/2 + 30, height/2 + 150);
  line(width/2 + 120, height/2 + 20, width/2 + 120, height/2 + 150);
}
