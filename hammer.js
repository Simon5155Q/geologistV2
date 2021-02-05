class Hammer{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, options);
        this.width = width;
        this.height = height;
  
        World.add(world, this.body);
      }
      display(){
 
        push();
        translate(this.body.position.x = mouseX, this.body.position.y = mouseY);
        pop();
      }
}
