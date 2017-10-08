var frame=0;
var num=15;
function setup() {
	createCanvas(600,600);
	cars=[];
	for(i=0;i<num;i++){
		cars.push(new Vehicle(random(width),random(height)));
	}

}

function draw() {
frame++;
background(51);
	for(i=0;i<num;i++){
		cars[i].show();
		for(j=i;j<num;j++)cars[i].connect(cars[j]);
		cars[i].arrive();
		cars[i].update();
		if(frame%120==0){
		cars[i].shift();
	 }
	}
}
