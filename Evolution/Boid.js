function Boid(){
 //this.pos=createVector(random(30,width-30),random(30,height-30));
 this.pos=createVector(width/5,height/2);
 this.vel=createVector(0,0);
 this.acc=createVector(0,0);
 var boidsize=15; var maxforce=2;
 this.maxvel=3;this.toStop=0;
 this.col=[random(255),random(255),random(255),random(200,255)]
 this.dna=[];
 this.cent=createVector(0,0);
 this.live=function(instant){
   this.applyforce(this.dna[instant]);
   this.update();
 }

 this.applyforce=function(force){
   this.acc.add(force.setMag(maxforce));
 }
 this.show=function(){
   noStroke();
   fill(this.col[0],this.col[1],this.col[2],this.col[3]);
   push();
   translate(this.pos.x,this.pos.y);
   rotate(this.vel.heading()+PI/2);
   triangle(-boidsize/2,0,boidsize/2,0,0,-2*boidsize);
   pop();
 }
 this.update=function(){
   if(!this.toStop){
   this.vel.add(this.acc).limit(this.maxvel);
   this.pos.add(this.vel);
   this.contain();
   this.acc.mult(0);
 }
 }
 this.contain=function(){
   if(this.pos.x>width-20){this.pos.x=width-20;this.vel.x*=-1;}
   if(this.pos.x<20){this.pos.x=20;this.vel.x*=-1; }
   if(this.pos.y>height-20){this.pos.y=height-20;this.vel.y*=-1;}
   if(this.pos.y<20){this.pos.y=20;this.vel.y*=-1;}
 }
 // this.stop=function(){
 //   this.vel.mult(0);
 //   this.acc.mult(0);
 //   this.toStop=1;
 // }
}

function Brick(loc){
  this.loc=loc;
  rad=20;
  this.show=function(){
    stroke(255);fill(255);
    rectMode(CENTER);
    ellipse(this.loc.x,this.loc.y,rad);
  }
  this.crash=function(pos){
    if(dist(this.loc.x,this.loc.y,pos.x,pos.y)<rad)return 1;
  }
}
