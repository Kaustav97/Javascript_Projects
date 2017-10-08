
var bubbles=[];

function setup() {
  createCanvas(windowWidth-5,windowHeight-5);
	background(0);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth-5, windowHeight-5);
}

function draw() {
  frameRate(60);
  background(0);
  for(j=0;j<bubbles.length;j++){
    bubbles[j].decideVel();
    bubbles[j].show();
    bubbles[j].jiggle();
  }
}

function mousePressed(){
  bubbles.push(new Bubble(mouseX,mouseY));
}
function mouseDragged(){
   bubbles.push(new Bubble(mouseX,mouseY));
}
function keyTyped(){
  if(key=='f')noLoop();
  if(key=='r')bubbles.splice(bubbles.length-41,42);
  if(key=='c')print(bubbles.length);
}
