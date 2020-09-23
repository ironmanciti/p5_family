let img1;
let img2;

let bot1;
let bot2;

function preload() {
  img1 = loadImage("../../media/robot1.svg");
  img2 = loadImage("../../media/robot2.svg");
}

function setup() {
  createCanvas(720, 480);
  bot1 = new Robot(img1, 90, 80);
  bot2 = new Robot(img2, 440, 30);
}

function draw() {
  background(204);
  // Update and display first robot
  bot1.update();
  bot1.display();

  // Update and display second robot
  bot2.update();
  bot2.display();
}

class Robot{
  constructor(img, tempX, tempY){
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
