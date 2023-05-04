const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var up
var right
var push

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
up=createImg("up.png")
up.position(20,30)
 up.size(50,50)
 up.mouseClicked(vforce)

 right=createImg("right.png")
 right.position(220,30)
 right.size(50,50)
 right.mouseClicked(hforce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}

function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.,y:-0.05})
  
  }


  