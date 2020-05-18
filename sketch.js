// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/
var  ground1,tank1

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    ground1 = new Ground(250,990,1500,20)
    tank1 = new Tanker (150,930,100,100);
    createCanvas(1000,1000);
}

function draw() {
  background('#222222');
  // Remember to update the Matter Engine and set the background.
  ground1.display();
  //This is tanker object
  tank1.display();
}



