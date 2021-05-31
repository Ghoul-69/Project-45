var ground;
var spaceship;
var meteors;
function setup() {
  createCanvas(1200,400);
  ground=createSprite(600, 385, 1200, 20);
  spaceship=createSprite(600,345,40,60)
  ground.shapeColor="BROWN";
  spaceship.shapeColor="BLUE";
}

function draw() {
  background(0);  
  drawSprites();

 

if (keyDown("RIGHT_ARROW")){
spaceship.x = spaceship.x+5;

}

if (keyDown("LEFT_ARROW")){
  spaceship.x = spaceship.x-5;
  
  }

spawnMeteors();


  spaceship.collide(ground);

}

function spawnMeteors(){
if(frameCount%60==0){
meteors=createSprite(600,Math.round(random(70,50)),20,50);
meteors.velocityY = +2;
}
}