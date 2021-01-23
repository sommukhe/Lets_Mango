
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree, mango, mango2, mango3, mango4, mango5, mango6, mango7, slingshot, stone, boy;
var score;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  score = 0;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(350,690,1000,50);
    tree = new Tree(550,450,5);
    boy = new Boy(150, 620,5);
    stone = new Stone(70,600,5);
    mango = new Mango(550,430,5);
    mango2 = new Mango(450,400,5);
    mango3 = new Mango(500,320,5);
    mango4 = new Mango(600,370,5);
    mango5 = new Mango(570,300,5);
    mango6 = new Mango(700,430,5);
    
    slingshot = new sling(stone.body, {x:100,y:570});
    
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  slingshot.display();
  detectcollision(stone, mango);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  
  drawSprites();
  

  text("Score:"+ score, 200, 250);
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function detectcollision(lstone,lmango){
  mangoBodyPos = lmango.body.position;
  stoneBodyPos = lstone.body.position;

   var distance = dist(stoneBodyPos.x, stoneBodyPos.y,mangoBodyPos.x, mangoBodyPos.y)
   if (distance <= lmango.r + lstone.r){
     Matter.Body.setStatic(lmango.body, false);
     score = score + 1;
   }

}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(stone.body);
  }
}




