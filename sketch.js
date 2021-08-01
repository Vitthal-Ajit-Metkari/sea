var seaImage,player,playerImage,sharkImage,shark, sea;


function preload() {
  seaImage=loadImage("sea.png");
  playerImage=loadImage("boat.png");
  sharkImage=loadImage("dragon.png");
}


function setup() {
  createCanvas(800,1400);
  player=createSprite(400, 200, 50, 50);
  player.addImage(playerImage);
  player.scale=0.3



  sea=createSprite(400, 200,200, 260);
  sea.addImage(seaImage);
  sea.velocityY=3

  shark=createSprite(450, 100, 50, 50);
  shark.addImage(sharkImage);
  shark.scale=0.1
}

function draw() {
  background("blue"); 

  sea.depth = player.depth;
  player.depth = player.depth + 1;
  
  +3
  //.velocityY = trex.velocityY + 0.8
  
  if (sea.y < 790){
    sea.y = sea.height/2;
  }
  drawSprites();
}