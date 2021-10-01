var path,boy, leftBoundary,rightBoundary, energydrink, coin, bomb;
var pathImg,boyImg,energydrinkImg, coinImg, bombImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  energydrinkImg = loadImage("energyDrink.png")
  coinImg= loadImage("coin.png")
  bombImg= loadImage("bomb.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;


}

var Coins= 0
function draw() {
    background(0);
  spawnCoins();
  spawnBombs();
  spawnEnergyDrinks();
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
}

function spawnCoins(){

if(frameCount%60===0){
//create coin
coin= createSprite(100,40);
coin.velocityY= 5;
coin.scale= 0.5
coin.addImage(coinImg);
coin.y= Math.round(random(10,100))
}
}

function spawnBombs(){

  if(frameCount%60===0){
   //create bomb
   bomb= createSprite(200,40);
   bomb.velocityY= 7
  bomb.scale= 0.1
  bomb.addImage(bombImg);

  bomb.y= Math.round(random(10,100))
  }
  }

  function spawnEnergyDrinks(){

    if(frameCount%60===0){
    //create energyDrink
   energydrink= createSprite (300,40);
   energydrink.velocityY= 5
   energydrink.scale= 0.1;
  energydrink.addImage(energydrinkImg);
  energydrink.y= Math.round(random(10,100))
    }
    }
