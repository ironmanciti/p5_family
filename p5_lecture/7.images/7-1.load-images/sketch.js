let img1;
let img2;

function preload(){
  img1 = loadImage('../images/banana.jpg')
  img2 = loadImage('../images/bird.png')
}

function setup(){
  createCanvas(640, 480);
}

function draw(){
  background(204);
  tint(255, 255);   //100% transparency
  image(img1, 0, 0, width/2, height/2);
  image(img2, width/2, 0, width/2, height/2);

  tint(255, 127);
  image(img1, 0, height/2, width/2, height/2);
  image(img2, width/2, height/2, width/2, height/2);
}

