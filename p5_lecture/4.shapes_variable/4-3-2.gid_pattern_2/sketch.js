function setup() {
  createCanvas(480, 120);
  noStroke();
}

function draw() {
  background(0);

  // for (let y = 0; y < height; y += 10){
  //   for (let x = 0; x < width; x += 10){
  //     ellipse(x, y, 4, 4);
  //     //원의 center 와 canvas 중앙 연결
  //     stroke(255, 100);
  //     line(x, y, width/2, height/2);
  //   }
  // }

  for (let y = 30; y < height; y += 10){
    for (let x = 10; x < width; x += 25){
      // y 가 증가할 수록 size 축소
      const diameter = 20 - y / 10;
      ellipse(x + y, y, diameter, diameter);
    }
  }
}





