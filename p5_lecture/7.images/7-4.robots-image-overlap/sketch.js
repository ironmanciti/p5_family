let bot1;
let bot2;
let landscape;

let easing = 0.05;
let offset = 0;

// Preload the images
function preload() {
  bot1 = loadImage("../../media/robot1.svg");
  bot2 = loadImage("../../media/robot2.svg");
  landscape = loadImage("../../media/capsule.jpg");
}

function setup() {
  createCanvas(720, 480);
}

function draw() {
  // 배경을 image 로 설정
  background(landscape);

  // mouseY 의 위치에 따라 좌우로 -40, 40 범위 이동
  // easing 기법 적용
  let targetOffset = map(mouseY, 0, height, -40, 40);

  offset += (targetOffset - offset) * easing;
  image(bot1, 85 + offset, 65);

  // 오른쪽 robot 은 더 적은 offset 적용
  let smallerOffset = offset * 0.3;
  image(bot2, 510 + smallerOffset, 140, 78, 248);
}
