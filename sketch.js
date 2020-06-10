const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var paper, paperimg,slingShot;
var ground, binimg;

var bin;

function preload(){
	binimg = loadImage("bin.png");
//	paperimg = loadImage("Sprites/paper.img");
}
	


function setup() {
	createCanvas(1900, 1500);


	engine = Engine.create();

	world = engine.world;


	paper = new Paper();
	ground = new Ground();
	
    binBody1 = new DustbinBody(530,400,20,170);
    binBody2 = new DustbinBody2(600,495,130,15);
    binBody3 = new DustbinBody(670,400,20,170);
	
	Engine.run(engine);	
	box2  =  createSprite(600,400,100,100);
	box2.addImage(binimg);
	box2.scale = 0.5;
	
	slingshot = new SlingShot(paper.body,{x:200, y:50});
   
  
}




function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
binBody1.display();
binBody2.display();
binBody3.display();


 drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY}); 
}


function mouseReleased(){
    slingshot.fly();
}

