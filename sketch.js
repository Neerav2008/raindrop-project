

var raindrop = [];

function setup() {
  createCanvas(400,400);
  
  

  for(var i=0;i<500;i++){
    raindrop[i] = new Raindrop();
  }
 
}

function draw() {
  background(255,255,255); 
  
  for(var i=0;i<500;i++){
    raindrop[i].display();
    raindrop[i].fall();
  }

 

  drawSprites();
}