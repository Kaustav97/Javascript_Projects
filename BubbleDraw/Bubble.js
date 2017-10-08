function Bubble(x,y){
  var hl,col,x,y;
  var xvel,yvel;

hl=random(2,35);
//this.hl=random(5,15);
col=[random(255),random(255),random(255),random(150,225)];
xvel=0;yvel=0;

this.show =function(){
  fill(col[0],col[1],col[2],col[3]);
  //ellipse(x,y,this.hl,this.vl);
  ellipse(x,y,hl,hl);
}
this.jiggle=function(){
  x+=xvel*1.5;
  y+=yvel*1.5;
  }
this.decideVel= function(){
    xvel=random(-1,1);
    yvel=random(-1,1);
  if(keyIsDown(UP_ARROW)){
    xvel=random(mouseX-pwinMouseX);
    yvel=random(mouseY-pwinMouseY);
    }
  if(keyIsDown(DOWN_ARROW)){
    xvel=random(0.05*(mouseX-x));
    yvel=random(0.05*(mouseY-y));
  }
}


}
