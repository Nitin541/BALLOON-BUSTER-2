

var bow , arrow, greenBballoon1, redBballoon1 ,pinkBalloon1 ,blueBalloon1, display;

var bowImage, arrowImage, greenBalloonImage, redBalloonImage, pinkBalloonImage ,blueBalloonImage, backgroundImage;

var i,shoot;

var balloon,redBalloon2,pinkBalloon2,pinkBalloon3,blueBalloon2;

var blueBalloon3,blueBalloon4,greenBalloon2,greenBalloon3;

var greenBalloon4,greenBalloon5;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  
  bowImage = loadImage("bow0.png");
  
  redBalloonImage = loadImage("red_balloon0.png");
  
  greenBalloonImage = loadImage("green_balloon0.png");
  
  pinkBalloonImage = loadImage("pink_balloon0.png");
  
  blueBalloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  shoot = false;
  
  display = createSprite(0,0,600,600);
  display.addImage(backgroundImage);
  display.scale = 3;
  
  win = 0;
 
  bow = createSprite(580,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  

  arrow = createSprite(580,220,5,5);
  arrow.addImage("arrow",arrowImage);
  arrow.scale = 0.4;
  
  redBalloon1 = createSprite(350,200,10,10);
  redBalloon1.addImage("redBalloon",redBalloonImage);
  redBalloon1.scale = 0.1;
  
  redBalloon2 = createSprite(350,300,10,10);
  redBalloon2.addImage("redBalloon",redBalloonImage);
  redBalloon2.scale = 0.1;
  
  pinkBalloon1 = createSprite(250,150,10,10);
  pinkBalloon1.addImage("pinkBalloon",pinkBalloonImage);
  pinkBalloon1.scale = 1.2;
  
  pinkBalloon2 = createSprite(250,250,10,10);
  pinkBalloon2.addImage("pinkBalloon",pinkBalloonImage);
  pinkBalloon2.scale = 1.2;
  
  pinkBalloon3 = createSprite(250,350,10,10);
  pinkBalloon3.addImage("pinkBalloon",pinkBalloonImage);
  pinkBalloon3.scale = 1.2;
  
  blueBalloon1 = createSprite(150,110,10,10);
  blueBalloon1.addImage("blueBalloon",blueBalloonImage);
  blueBalloon1.scale = 0.1;
  
  blueBalloon2 = createSprite(150,210,10,10);
  blueBalloon2.addImage("blueBalloon",blueBalloonImage);
  blueBalloon2.scale = 0.1;
  
  blueBalloon3 = createSprite(150,310,10,10);
  blueBalloon3.addImage("blueBalloon",blueBalloonImage);
  blueBalloon3.scale = 0.1;
  
  blueBalloon4 = createSprite(150,410,10,10);
  blueBalloon4.addImage("blueBalloon",blueBalloonImage);
  blueBalloon4.scale = 0.1;
  
  greenBalloon1 = createSprite(50,90,10,10);
  greenBalloon1.addImage("greenBalloon",greenBalloonImage);
  greenBalloon1.scale = 0.1;
  
  greenBalloon2 = createSprite(50,180,10,10);
  greenBalloon2.addImage("greenBalloon",greenBalloonImage);
  greenBalloon2.scale = 0.1;
  
  greenBalloon3 = createSprite(50,270,10,10);
  greenBalloon3.addImage("greenBalloon",greenBalloonImage);
  greenBalloon3.scale = 0.1;
  
  greenBalloon4 = createSprite(50,360,10,10);
  greenBalloon4.addImage("greenBalloon",greenBalloonImage);
  greenBalloon4.scale = 0.1;
  
  greenBalloon5 = createSprite(50,450,10,10);
  greenBalloon5.addImage("greenBaloon",greenBalloonImage);
  greenBalloon5.scale = 0.1;
  
  balloon = createSprite(450,250,10,10);
  balloon.addImage("balloon",greenBalloonImage);
  balloon.scale = 0.1;
  
}

function draw() {
    
    background(backgroundImage);
  
    display.velocityX = -3 

    if (display.x < 0){
      display.x = display.width/2;
    }
  
  if(arrow.isTouching(balloon)){
    balloon.y = -100;
    shoot = false;
  }
  
  bow.y = World.mouseY
  
  if(keyDown("space")){
    shoot = true;
  }
  
  if(shoot === false){
    arrow.y = World.mouseY;
    arrow.velocityX = 0;
    arrow.x = 580;
  }
  
  if(shoot === true){
    arrow.velocityX = -7;
  }
  
  
  if(arrow.isTouching(redBalloon1)){
    redBalloon1.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(redBalloon2)){
    redBalloon2.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(blueBalloon1)){
    blueBalloon1.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(blueBalloon2)){
    blueBalloon2.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(blueBalloon3)){
    blueBalloon3.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(blueBalloon4)){
    blueBalloon4.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(greenBalloon1)){
    greenBalloon1.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(greenBalloon2)){
    greenBalloon2.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(greenBalloon3)){
    greenBalloon3.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(greenBalloon4)){
    greenBalloon4.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(greenBalloon5)){
    greenBalloon5.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(pinkBalloon1)){
    pinkBalloon1.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(pinkBalloon2)){
    pinkBalloon2.y = -100;
    shoot = false;
  }
  
  if(arrow.isTouching(pinkBalloon3)){
    pinkBalloon3.y = -100;
    shoot = false;
  }
  
  
  
  if(arrow.x < 0){
    balloon.y = 250;
    
    redBalloon1.y = 200;
    redBalloon2.y = 300;
    
    pinkBalloon1.y = 150;
    pinkBalloon2.y = 250;
    pinkBalloon3.y = 350;
    
    blueBalloon1.y = 110;
    blueBalloon2.y = 210;
    blueBalloon3.y = 310;
    blueBalloon4.y = 410;
    
    greenBalloon1.y = 90;
    greenBalloon2.y = 180;
    greenBalloon3.y = 270;
    greenBalloon4.y = 360;
    greenBalloon5.y = 450;
    
  }  
   
  
  drawSprites();
}

