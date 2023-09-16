//preload variables
let backgroundImage, red, terrence, pig , sound;

//defining the engine
let Engine = Matter.Engine,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  World = Matter.World,
  Mouse = Matter.Mouse;

//entities
let bird1;
let bird2;
let pig1;
let pig2;
let box1;
let box2;
let ground;
let slingshot;

//mouseContraint 
let mConstraint;

//flags
let flag = 0;
let currentBird;

//score variable
let score = 0;
