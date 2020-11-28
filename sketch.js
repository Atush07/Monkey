
var monkey , monkey_running;
var bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var PLAY=1;
var END=0;
var gameState=1;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
  monkey=createSprite(100,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  score=0;
  ground=createSprite(400,350,1400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.setLifetime=100;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  
}


function draw() {
  background("lightgreen");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(gameState===PLAY){
  bananas();
  obstacles();
  if(keyDown("space")){
    monkey.velocityY=-15;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+2;
  }
  if(obstacleGroup.isTouching(monkey)){
    gameState=END;
    monkey.collide(ground);
    ground.velocityX=0;
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
  }
    

  }
  text("Score :"+ score,300,30);
  drawSprites();
}
function bananas(){
  if(frameCount%80===0){
  banana=createSprite(450,200,5,5);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5;
  banana.setLifetime=100;
  FoodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(400,320,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacle.setLifetime=100;
    obstacleGroup.add(obstacle);
  }
}





