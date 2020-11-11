const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ball
var ground;


function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world;

  var groundOption = {
    isStatic :true
  }

  var ballOption = {
    restitution : 1
  }

  ball = Bodies.circle(200,50,50,ballOption)
  World.add(world,ball);
  ground= Bodies.rectangle(200,380,400,30,groundOption);
  World.add(world,ground);

  console.log(ground);

  
}

function draw() {
  background("black"); 

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30)

  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y,50)
  
}