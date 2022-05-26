var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3
var coin,coinImg,coinGroup

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

coinImg = loadImage("assets/coin.png")
}

function setup(){

  createCanvas(400,400)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

coinGroup = createGroup()



}

function draw() {
  
  background("black");

  if(coinGroup.isTouching(balloon)){
    score=score+1
  }



  if(coinGroup.isTouching(balloon)){
   for(var i=0;i<coinGroup.length;i++){
     if(coinGroup[i].isTouching(balloon)){
       coinGroup[i].destroy()
     }
    }
  }
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.7;

           if(keyDown("LEFT_ARROW")){
            balloon.velocityX= -6;
          }
  
            if(keyDown("RIGHT_ARROW")){
            balloon.velocityX= +6;
            }
            if(balloon.collide(bottomGround)){
              balloon.velocityY=0;
              balloon.velocityX=0;
            } 
          
            spawnCoin();
          
            Bar();
   
        drawSprites();
       
        //spawning top obstacles
      spawnObstaclesTop();

      
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,100));

    //generate random top obstacles
    //var rand = Math.round(random(0,1));
    //var rand = random(1,2);
    var rand = Math.round(random(1,2));
//var rand=roundoff(random(1,2))

    switch(rand) {
      case 1: obstacleTop.addImage(obsTop1);
              break;
      case 2: obstacleTop.addImage(obsTop2);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleTop.lifetime = 100;
   //obstacleTop.depth=obstacleTop.depth+1;
    balloon.depth = balloon.depth + 1;
 //  balloon.depth = balloon.depth - 1;
      //obstacleTop.depth=obstacleTop.depth-1;

      }
}



 function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
          bar.depth = balloon.depth;
          bar.lifetime = 70;
          bar.visible = false;
         }
}


 function spawnCoin(){
   if(frameCount%40 ==0){
    coin = createSprite(random(50,350),0,50,50)
coin.addImage(coinImg)
coin.scale=0.02;
coin.velocityY=2
coinGroup.add(coin)
   }
 } 
