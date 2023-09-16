//preload function to intitiate all the required objects
function preload() {
  bg = loadImage('../images/back.jpg');
  img = loadImage('../images/g1.jpg');
  red = loadImage('../images/red.png');
  terrence = loadImage('../images/terence.png');
  pig = loadImage('../images/pig.png');
  sound = loadSound("../music/main_theme.mp3")
}

//setup function to define the engine params 
function setup() {

  engine = Engine.create();
  world = engine.world;
  
  let canvas = createCanvas(900, 500);
  let container = createDiv();

  container.style('width', '100%');
  container.style('height', '100vh');

  canvas.parent(container);
  container.mouseOver(canvasPressed);

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
  pig1 = new character(700, 400, 10, 0,pig);
  pig2 = new character(800, 400, 20, 0,pig);
  box1 = new box(800, 420, 50, 50);
  box2 = new box(700, 420, 50, 50);
  slingshot = new SlingShot(200, 300, bird1.body);
  ground = Bodies.rectangle(0, 460, 1800, 40, { isStatic: true })

  bird1.body.speed = bird1.body.speed * 1.5;
  mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  }
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, [mConstraint, ground]);
}


function canvasPressed() {

  if (flag4 == 0) {
    sound.loop();
    flag4 = 1;
  }
}

function mouseReleased() {
  setTimeout(() => {

    if (flag5 == 1) {
      slingshot.fire();
      flag3 = 1;
    }


  }, 10);
  setTimeout(() => {

    if (flag6 == 1) {
      slingshot.fire();
      flag3 = 0;
    }


  }, 10);

  setTimeout(() => {
    if (flag3 == 1) {
      bird2 = new character(200, 300, 30,0.5,terrence);
      slingshot = new SlingShot(200, 300, bird2.body);
    }
  }, 200);


}


function collision() {
  pos1 = pig1.body.position;
  pos2 = pig2.body.position;
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

function draw() {

  background(bg);
  Engine.update(engine);
  slingshot.show();
  bird1.show();

  if (bird2 != null) {
    bird2.show();
  }

  pig1.show();
  pig2.show();
  box1.show();
  box2.show();

  if (mConstraint.body == bird1.body) {
    flag5 = 1;
  }

  if (flag3 == 1) {
    setTimeout(() => {
      if (mConstraint.body == bird2.body) {
        flag6 = 1;
      }
    }, 202)
  }

  collision();

}