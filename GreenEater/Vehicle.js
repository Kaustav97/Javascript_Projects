function Vehicle(time){
var size=20;var toStop=0;

this.pos=createVector(width/2,height/2);
this.vel=createVector(0,0);
this.acc=createVector(0,0);
var bubbles=[];

  this.arrive=function(target,aff){
    //this.backjet();
    this.maxvel=7; this.maxforce=1.5;
    this.des=p5.Vector.sub(target,this.pos);
    steer=p5.Vector.sub(this.des,this.vel);
		steer.limit(this.maxforce);
    this.angle=this.vel.heading()+90;
		this.applyforce(steer.mult(aff));
    this.update();
  }

  this.Mousearrive=function(target){
    this.backjet();
    this.maxvel=12; this.maxforce=1.6;
    this.des=p5.Vector.sub(target,this.pos);
     if(this.des.mag()<100){
       str=map(this.des.mag(),0,100,0,this.maxvel);
       this.des.setMag(str);
     }
    else this.des.setMag(this.maxvel);
    Msteer=p5.Vector.sub(this.des,this.vel);
    Msteer.limit(this.maxforce);
    this.angle=this.vel.heading()+90;
    this.applyforce(Msteer);
    this.update();
  }
  this.buttonmove=function(){
    this.maxvel=5; this.maxforce=2;
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.angle);
    if(keyIsDown(73)){
      dir=createVector(cos(90+this.angle),sin(90+this.angle));
      if(time/200==0){
      bubbles.push(new Bubble(createVector(random(-size,-size+size/2),random(size*0.75,size))));
      bubbles.push(new Bubble(createVector(random(size/2,size),random(size*0.75,size))));
    }
      this.applyforce(dir.mult(-this.maxforce));
    }
    for(i=0;i<bubbles.length;i++){
  		bubbles[i].update();bubbles[i].show();
  		if(bubbles[i].time<0)bubbles.splice(i,1);
  	}
    if(keyIsDown(76)) this.angle+=5;//this.applytorque(maxtorque);
    if(keyIsDown(74)) this.angle-=5 //this.applytorque(-maxtorque);
    if(keyIsDown(75)) this.stop();
    pop();
    this.update();
  }
  this.backjet=function(){
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.angle);
    dir=createVector(cos(90+this.angle),sin(90+this.angle));
    bubbles.push(new Bubble(createVector(random(-size,-size+size/2),random(size*0.75,size))));
    bubbles.push(new Bubble(createVector(random(size/2,size),random(size*0.75,size))));
    for(i=0;i<bubbles.length;i++){
  		bubbles[i].update();bubbles[i].show();
  		if(bubbles[i].time<0)bubbles.splice(i,1);
  	}
    pop();
  }
  this.update=function(){
    this.vel.add(this.acc);this.vel.limit(this.maxvel);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.contain();
  }
  this.stop=function(){
    this.vel.mult(0);this.acc.mult(0);
    toStop=1;
    //angvel=0;angacc=0;
  }
  this.applytorque=function(torque){
     if(torque<-maxtorque)torque=-maxtorque;
     if(torque>maxtorque)torque=maxtorque;
     angacc+=torque;
  }
  this.applyforce=function(force){
   if(toStop!=1)this.acc.add(force);
  }
  this.Rshow=function(){
    stroke(255,100);fill(0);
    strokeWeight(3); ellipse(0,0,2,2);
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.angle);
    triangle(0,-2*size,-size,0,size,0);
    fill(255,0,0);
    rect(-size,0,size/2,size*0.75); rect(size-size/2,0,size/2,size*0.75);
    noFill();
    pop();
  }
  this.Bshow=function(){
    push();
    noStroke(); fill(200,0,200);
    translate(this.pos.x,this.pos.y);
    rotate(this.angle+180);
    beginShape();
    triangle(-size/2,0,size/2,0,0,2*size)
    pop();
  }
  this.contain=function(){
    if(this.pos.x>width)this.vel.x*=-1;
    if(this.pos.x<0)this.vel.x*=-1;
    if(this.pos.y>height)this.vel.y*=-1;
    if(this.pos.y<0)this.vel.y*=-1;
  }

}
