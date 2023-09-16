//preload function to intitiate all the required objects
function preload() {
  backgroundImage = loadImage('../images/back.jpg');
  red = loadImage('../images/red.png');
  terrence = loadImage('../images/terence.png');
  pig = loadImage('../images/pig.png');
  sound = loadSound("../music/main_theme.mp3")
  console.log("preload complete")
}

//setup function to define the engine params 
function setup() {

  engine = Engine.create();
  console.log("Game Started")
  
  let canvas = createCanvas(900, 500);
  let container = createDiv();

  container.style('width', '100%');
  container.style('height', '100vh');

  canvas.parent(container);

  //canvas styles
  canvas.style('border', '4px solid black');
  canvas.style('position', 'absolute');
  canvas.style('left', '15%');
  canvas.style('top', '10%');

  //score styles
  const div1 = createP('SCORE : ' + score.toString());
  div1.position(250, 120);
  div1.style('color', 'black')
  div1.style('text-transform', 'uppercase');
  div1.style('font-weight', 'bold');
  div1.style('font-family', 'cursive');
  div1.id('mypara');
  
  // entities
  bird1 = new character(200, 300, 10, 0.5,red);
  bird2 = new character(200, 700, 30,0.5,terrence);

  pig1 = new character(700, 400, 10, 0,pig);
  pig2 = new character(800, 400, 20, 0,pig);
  box1 = new box(800, 420, 50, 50);
  box2 = new box(700, 420, 50, 50);
  currentBird=bird1;
  slingshot = new SlingShot(200, 300, bird1.body);
  ground = Bodies.rectangle(0, 460, 1800, 40, { isStatic: true })

  //character options
  bird1.body.speed = bird1.body.speed * 1.5;

 //mouse options
  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  }
  mouse.pixelRatio = pixelDensity();

  mConstraint = Matter.MouseConstraint.create(engine, options);
  World.add(engine.world, [mConstraint, ground]);

  sound.loop();
  console.log(sound);
}

//mouseReleased for Firing operation
function mouseReleased() {
  //bird1 is released 
  if (mConstraint.body==bird1.body ){
  setTimeout(() => {  
      slingshot.fire();
      currentBird=bird2;
  }, 20);
}

//bird2 is released
if (mConstraint.body==bird2.body ){
  setTimeout(() => {  
      slingshot.fire();
      currentBird=null;
  }, 20);
}

//change the position of the bird2
  setTimeout(() => {
    if (currentBird==bird2) {
      bird2 = new character(200, 300, 30,0.5,terrence);
      slingshot = new SlingShot(200, 300, bird2.body);
    }
  }, 200);


}

//check for collision between the two objects 

function collision() {
  const pos1 = pig1.body.position;
  const pos2 = pig2.body.position;
  if ((pos1.x >= 702 || pos1.x <= 698 || pos1.y >= 402 || pos1.x <= 398) && flag1 == false) {
    flag1 = true;
    score=  score+ 1;

    document.getElementById('mypara').innerHTML = "SCORE : " + score.toString();
  }
  if ((pos2.x >= 802 || pos2.x <= 798 || pos2.y >= 402 || pos2.x <= 398) && flag2 == false) {
    flag2 = true;
    score=  score+ 1;

    document.getElementById('mypara').innerHTML = "SCORE : " + score.toString();
  }



}

//draw function to show the different entities 
function draw() {

  background(backgroundImage);
  Engine.update(engine);


  slingshot.show();
  bird1.show();
  pig1.show();
  pig2.show();
  box1.show();
  box2.show();
  

  if (currentBird==bird2 || flag==1) {
    bird2.show();
    flag=1;
  }

  
//detection of collision
  collision();

}