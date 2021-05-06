// module aliases

var Engine = Matter.Engine,
var world = Matter.World,
Bodies = Matter.Bodies,
  
var engine;
var world;
var particles = [];



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world = engine.world;
 
  var p = new Particle(300,50)
  particles.push(p)
  p.show();





}

function draw() {
  background(51);  
  drawSprites();
}