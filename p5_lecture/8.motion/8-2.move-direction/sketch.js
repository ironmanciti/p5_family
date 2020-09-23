let radius = 40;
let x = 110;
let speed = 2;
let direction = 1;

function setup() {
  createCanvas(640, 480);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  x += speed * direction;
  if ((x >  width+radius) || (x < radius)){
    direction = -direction;
  }

  if (direction === 1){
    arc(x, 60, radius, radius, 0.52, 5.76);  //start, end radian
    arc(x, 160, radius, radius, 0, PI);      //0, 3.14
    arc(x, 260, radius, radius, 0, PI/2);
  } else {
    arc(x, 60, radius, radius, 3.67, 8.9);  //start, end radian
    arc(x, 160, radius, radius, PI, 0);      //0, 3.14
    arc(x, 260, radius, radius, PI/2, 0);
  }
}

function keyPressed(){
  if (key === '1'){
    direction *= -1;
  }
}

