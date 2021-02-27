class Bin  {
    constructor(x, y) {
      var options = {
          isStatic: true,
          restitution:0.3,
          friction:0.5,
          density:1.2
    
      }
      this.body = Bodies.rectangle(x, y, 300,400, options);
      this.width = 300
      this.height= 400;
      this.image=loadImage("images for paper toss/cartoon-paper-trash-can-image_csp63428773-removebg-preview.png")
     
    
   
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  };