var fixedRect,movingRect;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 100);
  movingRect = createSprite(100,100,100,50);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x-movingRect.x <= (fixedRect.width + movingRect.width)/2 && 
  movingRect.x-fixedRect.x <= (fixedRect.width + movingRect.width)/2 && 
  fixedRect.y-movingRect.y <= (fixedRect.height + movingRect.height)/2 && 
  movingRect.y-fixedRect.y <= (fixedRect.height + movingRect.height)/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}