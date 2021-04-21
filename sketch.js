var bg,bgImg
var player,playerImg
var enemyImg1,enemyImg2,enemyImg3
var laserImg,laserGroup
var enemyG1,enemyG2,enemyG3
var score=0;

function preload(){
  bgImg = loadImage ("bg.jpg")
  playerImg=loadImage ("playership.png")
  enemyImg1=loadImage ("enemy1.png")
  enemyImg2=loadImage ("enemy2.png")
  enemyImg3=loadImage ("enemy3.png")
  laserImg=loadImage ("laser.png")
}

function setup() {
  createCanvas(1300,700);

  

  bg=createSprite(650,350,1300,700);
  bg.addImage(bgImg);
  bg.scale=3;
  bg.velocityY=-2;

  player=createSprite(650,650);
  player.addImage(playerImg);
  player.scale=0.2;
   
  enemyG1=new Group();
  enemyG2=new Group();
  enemyG3=new Group();

  laserGroup=new Group();
  
}


function draw() {
  background("blue");  
  player.x=mouseX;
  if (bg.y<0){
    bg.y=height/2;
  }

  if(laserGroup.isTouching(enemyG1)){
    laserGroup.destroyEach();
    enemyG1.destroyEach();
    score=score+1;
  }
  if(laserGroup.isTouching(enemyG2)){
    laserGroup.destroyEach();
    enemyG2.destroyEach();
    score=score+2;
  }
  if(laserGroup.isTouching(enemyG3)){
    laserGroup.destroyEach();
    enemyG3.destroyEach();
    score=score+3 ;
  }
 var rand=Math.round(random(1,3));
 if(rand==1){
    spawnEnemy1();
 }
 else if (rand==2){
   spawnEnemy2();
 }
 else {
   spawnEnemy3();
  }

 spawnLaser();

  drawSprites();
  fill("white");
  textSize(22);
  text("Score:  "+score,800,50);
}

function spawnEnemy1(){
  if (World.frameCount%100==0){
    var enemy1=createSprite (random(50,1250),0);
    enemy1.addImage(enemyImg1);
    enemy1.scale=0.2;
    enemy1.velocityY=3;
    enemyG1.add(enemy1);
  }
}
function spawnEnemy2(){
  if (World.frameCount%100==0){
    var enemy2=createSprite (random(50,1250),0);
    enemy2.addImage(enemyImg2);
    enemy2.scale=0.4;
    enemy2.velocityY=3;
    enemyG2.add(enemy2);
  }
}
function spawnEnemy3(){
  if (World.frameCount%100==0){
    var enemy3=createSprite (random(50,1250),0);
    enemy3.addImage(enemyImg3);
    enemy3.scale=0.5;
    enemy3.velocityY=3;
    enemyG3.add(enemy3);
  }
}

function spawnLaser(){
  if(keyDown("space") ){
    var laser =createSprite(player.x,player.y,2,4);
    laser.addImage(laserImg);
    laser.scale=0.2;
    laser.velocityY=-5;
    laserGroup.add(laser);

  }
}