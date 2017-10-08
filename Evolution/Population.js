function Race(lifespan){
  var boids=[];
  this.bricks=[];
  this.num=30;
  var pool=[];var fitness=[];
  this.target=createVector(width*0.8,height/2);

  this.make=function(){
    for(i=0;i<this.num;i++){
  	 	boids[i]=new Boid();
  	 	for(j=0;j<lifespan;j++){
  	 	   boids[i].dna.push(p5.Vector.random2D());
  	 	}
    }
  }

  this.live=function(inst){
     for(i=0;i<this.num;i++){
      for(j=0;j<this.bricks.length;j++){
        if(this.bricks[j].crash(boids[i].pos)){
          boids[i].toStop=1;
          fitness[i]*=0.5;
        }
      }
      d=p5.Vector.sub(boids[i].pos,this.target);
      if(d.mag()<=20){
        fitness[i]*=5;
        boids[i].toStop=1;
      }
      boids[i].show();
      boids[i].live(inst);
     }
  }

  this.rebirth=function(){
    this.makepool();
    boids=[];
    for(i=0;i<this.num;i++){
  	 	boids[i]=new Boid();
      for(j=0;j<lifespan;j++){
  	    p1=random(pool);
        p2=random(pool);
        mid=lifespan/2;
        if(j<mid){
          boids[i].dna[j]=p1.dna[j];
          if(random(1)<0.004)boids[i].dna[j]=p5.Vector.random2D();
        }
        else{
          boids[i].dna[j]=p2.dna[j];
          if(random(1)<0.004)boids[i].dna[j]=p5.Vector.random2D();
        }
     	}
    }
  }

  this.makepool=function(){
    pool=[];fitness=[];
    for(i=0;i<this.num;i++){
      str=1/dist(boids[i].pos.x,boids[i].pos.y,this.target.x,this.target.y);
      fitness[i]=map(str,0,1,0,100);
    }
    for(i=0;i<this.num;i++){
      for(j=0;j<ceil(10*fitness[i]);j++){
      pool.push(boids[i]);
      }
    }
//    print(fitness);
  }


}
