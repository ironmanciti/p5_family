function setup(){
  createCanvas(640, 480);
  loadImage('../images/bird.png', drawImage);
}

function drawImage(img){
  image(img, 0, 0, width, height);
}

