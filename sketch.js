var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(350,50,50,50);
  ob1.shapeColor = "blue";
  ob2 = createSprite(300,50,50,50);
  ob2.shapeColor= "blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
ob1.x = mouseX;
ob1.y = mouseY;
  
if(isTouching(ob1,ob2)){
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
}
else{
  ob1.shapeColor = "blue";
  ob2.shapeColor = "blue";
}
  drawSprites();
}
