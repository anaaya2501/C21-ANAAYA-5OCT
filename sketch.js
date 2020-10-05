var rect1,rect2;
function setup() {
  createCanvas(800,800);
  rect1 =  createSprite(400, 200, 50, 70);
  rect2 = createSprite(400,200,50,70);
  rect3 = createSprite(50,500.50,70);
  rect4 = createSprite(300,500,50,70);

  rect3.shapeColor = "black";
  rect4.shapeColor = "red";

  rect3.velocityX = 5;
  rect4.velocityX = -5;

}

function draw() {
  background(255,255,255);  
  rect1.y = World.mouseY;
  rect1.x = World.mouseX;

  if(touch(rect1,rect2)){
    rect1.shapeColor = "green";
    rect2.shapeColor = "blue";

  }
  else{
    rect1.shapeColor = "grey";
    rect2.shapeColor = "grey";

  }
touch2(rect3,rect4);
  

  drawSprites();
}

function touch2(object1,object2){

  if(object1.x-object2.x<object2.width/2 + object1.width/2 &&
    object2.x-object1.x<object1.width/2 + object2.width/2 &&
     object1.y-object2.y<object2.height/2 + object1.height/2 && 
     object2.y-object1.y<object1.height/2+ object1.height/2){
  
   object1.velocityX = -1 * object1.velocityX;
   object2.velocityX = -1 * object2.velocityX;
 
   
   
   }


}

