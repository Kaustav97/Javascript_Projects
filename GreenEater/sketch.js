var GameSize=30;
var time=0;var over=0;
var foods=[];
var scores=[0,0];

function setup() {
	setInterval(function () {
		if(over===0)supply();
	}, 75);
	setInterval(function () {
		if(over===0)time++;
	}, 1000);
 createCanvas(windowWidth-10,windowHeight-10);
 Reset();
 angleMode(DEGREES);
}

function draw(){
	background(50);
	v2.Rshow();
	v2.Mousearrive(createVector(mouseX,mouseY));
	for(i=0;i<foods.length;i++)foods[i].show();
	v1.Bshow();
	 //CPU:
	foods.sort(comp1);
	if(foods[0]!=null) v1.arrive(foods[0].loc,foods[0].aff);
	if(v1.des.mag()<15){foods.splice(0,1);scores[0]+=1; }

	//PLAYER:
	foods.sort(comp2);
	if(foods[0]!=null && dist(v2.pos.x,v2.pos.y,foods[0].loc.x,foods[0].loc.y)<20 && !over)
	{foods.splice(0,1);scores[1]+=1; }

	textSize(25);
	var br=map(time,0,GameSize,0,255);
	noStroke();fill(br,255-br,0);
	textAlign(CENTER,CENTER);
	text("TIME: "+(GameSize-time),50,15);
	if(time==GameSize){
		fill(255);
		text("COMP:"+scores[0]+" YOU: "+scores[1],width/2,height/2);
		text("PRESS ANY KEY TO PLAY AGAIN ",width/2,height/2+50);
		over=1;v1.stop();
	}
	else {
		fill(255);text("Eat More than your opponent !",width/2,25);
	}
}

function keyPressed(){
	if(over)Reset();
}

function supply(){
 if(random(-1,1)>0){
	nfood=createVector(random(50,width-50),random(50,height-50));
	foods.push(new Food(nfood,random(2,3)));
 }
}

function Reset(){
	time=0;over=0;
	foods=[];
	scores=[0,0];

	v1=new Vehicle();
	v2=new Vehicle();
	for(i=0;i<30;i++){
		fl=createVector(random(50,width-50),random(50,height-50));
		foods.push(new Food(fl,random(2,3)));
	}
}
function comp2(fa,fb){
	da=dist(fa.loc.x,fa.loc.y,v2.pos.x,v2.pos.y);
	db=dist(fb.loc.x,fb.loc.y,v2.pos.x,v2.pos.y);
	if(da>db)return 1;
	else return -1;
}
function comp1(fa,fb){
	da=dist(fa.loc.x,fa.loc.y,v1.pos.x,v1.pos.y);
	db=dist(fb.loc.x,fb.loc.y,v1.pos.x,v1.pos.y);
	if(da>db)return 1;
	else return -1;
}
function windowResized(){
	resizeCanvas(windowWidth-10,windowHeight-10);
}
