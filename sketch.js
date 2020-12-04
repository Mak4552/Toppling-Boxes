const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world,engine;


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var goptions={isStatic:true};
  ground=Bodies.rectangle(400,400,800,30,goptions)
  World.add(world,ground)
  var boptions={restitution:1}
  ball=Bodies.circle(400,200,30,boptions);
  World.add(world,ball);
}
function draw() {
  background(255,255,255);  
 Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)

  drawSprites();
}