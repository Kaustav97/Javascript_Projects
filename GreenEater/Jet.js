function Bubble(loc){
  this.pos=loc;
  this.vel=createVector(0,3);
  this.time=100;
 this.update=function(){
    push();
    this.pos.add(this.vel);
    this.time-=10;
    pop();
  }
 this.show=function(){
    noStroke();fill(255,this.time);
    rad=random(20);
    ellipse(this.pos.x,this.pos.y,rad,rad);
  }
}

function Rock(loc,rad){
  theta=0;points=floor(random(3,20));
  offset=20;
  this.show=function(){
    push();
    stroke(255);noFill();
    translate(loc.x,loc.y);
    beginShape();
    for(i=0;i<points;i++){
      //offset=random(0.75,1);
      offset*=-1;
      vertex((rad+offset)*cos(theta),(rad+offset)*sin(theta));
      theta+=360/points;
    }
    endShape(CLOSE);
    offset=10;
    pop();
  }
}

function Food(loc,aff){
 this.loc=loc;this.aff=aff;
  this.show=function(){
    this.col=[0,255,0];
    noStroke();fill(this.col[0],this.col[1],this.col[2],200);
    ellipse(loc.x,loc.y,20,20);
  }
}
