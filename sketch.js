var fixedRect, movingRect;
var g1,g2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  g1 = createSprite(100,50,100,50);
  g1.velocityX = 4;

  g2 = createSprite(500,50,100,50);
  g2.velocityX =-4;
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect,fixedRect);
  bounceoff(g1,g2);
 
  drawSprites();
}





