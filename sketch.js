function setup() {
  createCanvas(800,400);
 object1= createSprite(400, 200, 50, 50);
 object1.shapeColor="yellow";
 object2= createSprite(200,200,60,60);
 object2.shapeColor="green";
}

function draw() {
  background("black"); 
  object2.x=World.mouseX;
  object2.y=World.mouseY;
  if(object2.x-object1.x<object2.width/2+object1.width/2 && object1.x-object2.x<object2.width/2+object1.width/2 && object2.y-object1.y<object1.height/2+object2.height/2 && object1.y-object2.y<object1.height/2+object2.height/2){
    object2.shapeColor="blue";
  }
  
  else
  object2.shapeColor="green";

  drawSprites();
}