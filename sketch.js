const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

function preload(){
polygonImg = loadImage("polygon.png");
}

function setup(){
createCanvas(1200,500);

engine = Engine.create();
world = engine.world;


ground1 = new Ground(500, 420, 450, 20);
ground2 = new Ground(870, 200, 390, 20);
ground3 = new Ground(600, 470, 1200, 20);
block1 = new box(400, 410, 40, 70);
block2 = new box(430, 410, 40, 70);
block3 = new box(460, 410, 40, 70);
block4 = new box(490, 410, 40, 70);
block5 = new box(520, 410, 40, 70);
block6 = new box(550, 410, 40, 70);
block7 = new box(580, 410, 40, 70);
block8 = new box(600, 410, 40, 70);
block9 = new box(770, 180, 40, 70);
block10 = new box(800, 180, 40, 70);
block11 = new box(830, 180, 40, 70);
block12 = new box(860, 180, 40, 70);
block13 = new box(890, 180, 40, 70);
block14 = new box(920, 180, 40, 70);
block15 = new box(950, 180, 40, 70);
polygon = new Polygon(70, 250, 20);
slingShot = new SlingShot(polygon.body,{x: 100, y:200})
}

function draw(){
background(225);
Engine.update(engine);
text("SCORE : "+ score, 750, 40);

ground1.display();
ground2.display();
ground3.display();
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();
block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
polygon.display();
slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}