var points=[];
var cm;

function setup() {
createCanvas(600,600);
cm=createVector(0,0);
translate(width/2,height/2);
}

function draw() {
	background(51);
	translate(width/2,height/2);
	noStroke();
	for(i=0;i<points.length;i++){
		fill(255);ellipse(points[i].x,points[i].y,20,20);
	}
	if(points.length>0){
		fill(255,0,0);
		ellipse(cm.x,cm.y,10,10);
	}
}

function mouseDragged(){
	points.push(new p5.Vector(mouseX-width/2,mouseY-height/2));
}

function keyPressed(){
	for(i=0;i<points.length;i++){
		cm.add(points[i]);
	}
	cm.mult(1/points.length);
	fill(255,0,0);
	ellipse(cm.x,cm.y,30,30);
}
