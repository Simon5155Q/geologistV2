
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rock, hammer, rubber

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	rock = new Rock(200,200,50,50);
	hammer = new Hammer(100,200);
	rubber = new Rubber(300,300,50,50);
}


function draw() {
 
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  rock.display();
  
  drawSprites();
 
}



