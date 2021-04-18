var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var log1;
var log2;
var log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	//packageSprite=createSprite(width/2, 80, 50,50);
	//packageSprite.addImage(packageIMG)
	//packageSprite.scale=0.1

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-50, width,20);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 ,100 , 50 ,50, {restitution:0, isStatic:true, density:1.2});
	World.add(world, packageBody);
	
	log1 = new log(width/2-120,580,20,100,180);
	log2 = new log(width/2-20,630,200,20,90);
	log3 = new log(width/2+90,580,20,100,180);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill("green")
  push();
      rotate(packageBody.angle)
      translate(packageBody.position.x,packageBody.position.y)
      imageMode(CENTER);
	  image(packageIMG,0,0,50,50)
      pop();
  rect(ground.position.x,ground.position.y,width,20)
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, isStatic=false)
  }
}



