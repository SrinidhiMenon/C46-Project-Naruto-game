var runningImg,standImg,bgImg;
var naruto,bg
function setup() {
  createCanvas(1100,400);
  bg = createSprite(500,200,1100,400);
  bg.addImage("bg",bgImg);
  bg.scale=1.4;
  bg.velocityX = 0;

  naruto = createSprite(250,275,20,20);
  naruto.scale = 2.5
  naruto.addImage("stand",standImg)
  naruto.addAnimation("Naruto",runningImg);
}

function preload(){
runningImg = loadAnimation("run1.png","run2.png","run3.png","run4.png");
standImg = loadImage("stand.png");
bgImg = loadImage("bg.png");


}

function draw() {
  background("black");  
  if(bg.x<500){
bg.x = 550

  }

  if(keyDown("s")){
    bg.velocityX = -1;
    naruto.changeAnimation("Naruto",runningImg)
  }
  drawSprites();
}
