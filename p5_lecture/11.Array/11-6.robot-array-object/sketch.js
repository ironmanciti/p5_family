let robotImage;
let bots = [];  // Declare array to hold Robot objects

function preload() {
  robotImage = loadImage("../../media/robot1.svg");
}

function setup() {
  createCanvas(720, 480);

  const numRobots = 20;

  // Create each object
  for (let i = 0; i < numRobots; i++) {
    // x 좌표 random 생성
    const x = random(-40, width-40);
    // y 좌표는 순서대로 위에서 아래로 assign
    const y = map(i, 0, numRobots, -100, height-200);
    bots[i] = new Robot(robotImage, x, y);
  }
}

function draw() {
  background(204);
  // Update and display each bot in the array
  for (let i = 0; i < bots.length; i++) {
    bots[i].update();
    bots[i].display();
  }
}

class Robot{
  constructor(img, tempX, tempY){
    // Set initial values for properties
    this.xpos = tempX;
    this.ypos = tempY;
    this.angle = random(0, TWO_PI);
    this.botImage = img;
    this.yoffset = 0.0;
  }
  update(){
    this.angle += 0.05;
    this.yoffset = sin(this.angle) * 20;
  }
  display(){
    image(this.botImage, this.xpos, this.ypos + this.yoffset);
  }
}

