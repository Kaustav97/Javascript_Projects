
function Vehicle(x,y){
//this.vel=createVector(random(1),random(1));
this.vel=createVector(1,0);
this.pos=createVector(x,y);
this.acc=createVector(0,0);
this.des=createVector(0,0);
//this.target=createVector(mouseX,mouseY);
this.target=createVector(width/2,height/2);
maxvel=12;maxforce=0.8;

	this.arrive=function(){
		this.des=p5.Vector.sub(this.target,this.pos);
		if(this.des.mag()<100){
			str=map(this.des.mag(),0,100,0,maxvel);
			this.des.setMag(str);
		}
		else this.des.setMag(maxvel);
		this.steer=p5.Vector.sub(this.des,this.vel);
		this.steer.limit(maxforce);
		this.applyForce(this.steer);
	}

  this.connect=function(that){
    stroke(255,100);
    line(this.pos.x,this.pos.y,that.pos.x,that.pos.y);
  }

  this.shift=function(){
    this.target=createVector(random(50,width-50),random(50,height-50));
  }

	this.applyForce=function(f){
		this.acc.add(f);
	}

	this.update=function(){
		this.vel.add(this.acc);this.vel.limit(maxvel);
		this.pos.add(this.vel);
		this.acc.mult(0);
    this.des.mult(0);
  //   if(this.pos.x>width-20 || this.pos.x<20 ||this.pos.y>height-20 || this.pos.y<20 ){
  //   this.target=createVector(width/2,height/2);
  //   }
   }

	this.show=function(){
		stroke(255);
		ellipse(this.pos.x,this.pos.y,25,25);
	}
}
