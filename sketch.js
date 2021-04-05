var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bWallL , bWallRSprite;
var bWallR , bWallRSprite;
var bBase, bBaseSprite;
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
	
 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bBaseSprite=createSprite(400,665,200,20);
	bBaseSprite.shapeColor=color("red")
	bWallRSprite=createSprite(300,625,20,100);
	bWallRSprite.shapeColor=color("red");
	bWallLSprite=createSprite(500,625,20,100);
	bWallLSprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	bBase = Bodies.rectangle(400,665,200,20,{isStatic:true});
	World.add(world, bBase);
	bWallR = Bodies.rectangle(300,625,20,100,{isStatic:true});
	World.add(world, bWallR);
	bWallL = Bodies.rectangle(500,625,20,100,{isStatic:true});
	World.add(world, bWallL);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  var helicopterSprite={
		isStatic: false
	}
	var package ={
		restitution: 0
	}
	World.add(world,package);
	
	keyPressed();
	drawSprites();
 
}

function keyPressed() {
 	if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  	Matter.Body.setStatic(packageBody,false); 
	 
	 }
}

