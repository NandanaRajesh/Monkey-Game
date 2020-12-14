
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey= createSprite(100,290,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;

  ground = createSprite(0,352,1200,8);
  ground.x = ground.width /2;
  
  FoodGroup = createGroup();
ObstaclesGroup = createGroup();
}


function draw() {
createCanvas(600,400);
  
  textSize =24;
 survivalTime=Math.round(frameCount/frameRate());
text("Survival Time = "+survivalTime,450,50);
  
  
  monkey.collide(ground);
  ground.VelocityX=-4;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space")) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    FoodGroup.add(banana);
}
}
function spawnObstacles(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,342,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    obstacle.lifetime = 200;
    
    ObstaclesGroup.add(obstacle);
}
}

