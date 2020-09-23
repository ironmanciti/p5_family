const numFrames = 12;
const images = [];
let currentFrame = 0;

function preload(){
  for (let i = 0; i < numFrames; i++){
    let imageName = '../../media/frame-' + 
            String(i).padStart(4, "0") + ".png";
    images[i] = loadImage(imageName);
  }
}

function setup(){
  createCanvas(640, 480);
  frameRate(24);
}

function draw(){
  image(images[currentFrame], 0, 0, 480, 320);
  currentFrame++;
  if (currentFrame === images.length) {
    currentFrame = 0;
  }
}

