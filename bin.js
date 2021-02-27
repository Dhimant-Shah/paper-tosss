class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		var binPositionRef = database.ref('dustbin/position');
    	binPositionRef.on("value", (data)=>{
			position = data.val()
			this.x = position.x
			this.y = position.y
		  });
		this.dustbinWidth=300;
		this.dustbinHeight=400;
		this.wallThickness=5;
		
		this.image=loadImage("images for paper toss/cartoon-paper-trash-can-image_csp63428773-removebg-preview.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth-100, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/4, this.y-this.dustbinHeight/4, this.wallThickness, this.dustbinHeight-200, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/4, this.y-this.dustbinHeight/4, this.wallThickness, this.dustbinHeight - 200, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);


		


	}

	
	display()
	{
			//var posBottom=this.bottomBody.position;
			//var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			

			push()
			translate(this.x-this.dustbinWidth/4, this.y-this.dustbinHeight/4);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight-200);
			pop()

			push()
			translate(this.x+this.dustbinWidth/4, this.y-this.dustbinHeight/4);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight-200);
			pop()

			push()
			translate(this.x, this.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/4,this.dustbinWidth, this.dustbinHeight)
			rect(0,0,this.dustbinWidth-100, this.wallThickness);
			pop()
			
	}


	
	  
	writePosition (x,y){
	  database.ref('dustbin/position').set({
		x: position.x + x, 
		y: position.y + y
	  })
	  }

}