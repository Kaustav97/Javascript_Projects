
var inst=0,lifespan=100;
var popul;var gen=0;

function setup() {
	createCanvas(windowWidth-4,windowHeight-4);
	popul=new Race(lifespan);
	setInterval(function () {
	inst++;
},100);
	background(51);
	popul.make();
}
function windowResized(){
	resizeCanvas(windowWidth-4,windowHeight-4);
}

function draw() {
	background(51);
	fill(255,0,0);
	ellipse(popul.target.x,popul.target.y,15);
	if(inst>=lifespan){
		popul.rebirth();
		inst=0;gen++;
	}
	for(i=0;i<popul.bricks.length;i++)popul.bricks[i].show();
	popul.live(inst);
	textSize(25);
	noStroke();fill(255);
	textAlign(CENTER,CENTER);
	text("Generation: "+gen,80,10);
}

function mouseDragged(){
	brickpos=createVector(mouseX,mouseY);
	popul.bricks.push(new Brick(brickpos));
}
