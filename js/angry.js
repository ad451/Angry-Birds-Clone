let bg;
let img;
let button;
let count=0;
let over=false;
let div1;
var Engine = Matter.Engine,
    // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World=Matter.World,
    
    Mouse=Matter.Mouse

const {  MouseConstraint } = Matter;    
var engine;
var world;
var boxes=[];

let red;
let terrence;
let pig;
var bird1;
var bird2;
let pig1;
let pig2;
let box1;
let box2;
let flag6=0;
let flag4=0;
let flag3=0;
var flag2=false;
let  mConstraint;
let slingshot;
let circle1;
var flag1=false;
let count1=0;
var sound;
var flag7=0;
var pos1;
var pos2;
function preload(){
  bg = loadImage('../images/back.jpg');
  img=loadImage('../images/g1.jpg');
  red=loadImage('../images/red.png');
  terrence=loadImage('../images/terence.png');
  pig=loadImage('../images/pig.png');
  sound=loadSound("../music/main_theme.mp3")
}
let mouse;

let ground;
function setup() {
  engine=Engine.create();
  world=engine.world;
  var canvas=createCanvas(900, 500);
  var container=createDiv();
  container.style('width','100%');
  container.style('height','100vh');
  canvas.parent(container);
  container.mouseOver(canvasPressed);
  //canvas styles
  canvas.style('border','4px solid black');
  canvas.style('position','absolute');
  canvas.style('left','15%');
  canvas.style('top','10%');
 //score styles
  div1=createP('SCORE : '+count.toString());
  div1.position(250,120);
  div1.style('color','black')
  div1.style('text-transform','uppercase');
  div1.style('font-weight','bold');
  div1.style('font-family','cursive');
  div1.id('mypara');
  // entities
  bird1=new bird(200,300,10);
  pig1=new pigg(700,400,10);
  pig2=new pigg(800,400,20);
  box1=new boxy(800,420,50,50);
  box2=new boxy(700,420,50,50);

  bird1.body.speed=bird1.body.speed*1.5;
  slingshot = new SlingShot(200, 300, bird1.body);
  ground=Bodies.rectangle(0,460,1800,40,{isStatic:true})
  mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  }
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world, [mConstraint,ground]);
}
function mouseDragged(){
  //pass
}
function mousePressed(){
  //pass
}
function canvasPressed(){
 
  if (flag4==0){
  sound.loop();
  flag4=1;
  }
}

function mouseReleased() {
  setTimeout(() => {
    
    if (flag6==1){
    slingshot.fire();
    flag3=1;
    }
  
    
  }, 10);
  setTimeout(() => {
  
    if (flag7==1){
    slingshot.fire();
    flag3=0;
    }

    
  }, 10);
  
  setTimeout(() => {
   if (flag3==1){
    bird2=new terry(200,300,30);
    slingshot=new SlingShot(200, 300, bird2.body);
  }}, 200);


}
function collision(){
  pos1=pig1.body.position;
  pos2=pig2.body.position;
  if ((pos1.x>=702 || pos1.x<=698 || pos1.y>=402 || pos1.x<=398) && flag1==false){
    flag1=true;
    count=count+1;
    
    document.getElementById('mypara').innerHTML="SCORE : "+count.toString();
  }
  if ((pos2.x>=802 || pos2.x<=798 || pos2.y>=402 || pos2.x<=398) && flag2==false){
    flag2=true;
    count=count+1;
  
    document.getElementById('mypara').innerHTML="SCORE : "+count.toString();
  }


  
}

function draw(){
background(bg);
Engine.update(engine);
slingshot.show();
bird1.show();
if (bird2!=null){
  bird2.show();
}
pig1.show();
pig2.show();
box1.show();
box2.show();
if(mConstraint.body==bird1.body){
  flag6=1;
}
if(flag3==1 ){
  setTimeout(()=>{
  if(mConstraint.body==bird2.body){
  flag7=1;
  }
},202)
}
collision();
}