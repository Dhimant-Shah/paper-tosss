const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var i = 0;
var gameState 
var database
var position

function preload(){
  bg = loadImage("images for paper toss/background.jpg")

}


function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    database = firebase.database();


    ball1 = new Ball (200 ,displayHeight-200)

    ground = new Ground (displayWidth/2, displayHeight-100, displayWidth, 50)
    
    bin1 = new dustbin (1200, 750);
    
}

function draw(){
  background(bg)
  
  Engine.update(engine);
 
  ground.display();
  ball1.display();
  bin1.display();
  //bin.display();
}



function keyPressed() {

  //bin(arrow)

  if (keyCode===UP_ARROW) {
    bin1.writePosition (0,-5)
  }

  if (keyCode===DOWN_ARROW) {
    bin1.writePosition (0,5)
  }

  if (keyCode===LEFT_ARROW) {
    bin1.writePosition (-5,0)
  }

  if (keyCode===RIGHT_ARROW) {
    bin1.writePosition (5,0)
  }
  

   //wasd

  if(i<11){
    if (keyCode === 87) {
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:25,y:-50});
      i++;
    }
    if (keyCode === 83) {
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-25,y:50});
      i++;
    }
    if (keyCode === 68) {
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-25});
      i++;    
    } 
    if (keyCode === 65 ) {
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:25});
      i++; 
    }
  }
  else{
    Matter.Body.setStatic(ball1.body,true)
    
  }

  
  
}


/*
function readPosition (data){
  position = data.val()
  bin1.x = position.x
  bin1.y = position.y
}

function writePosition (x,y){
database.ref('dustbin/position').set({
  x: position.x + x, 
  y: position.y + y
})
}
*/