class log {
    constructor(x, y, width, height,angle) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      angleMode(DEGREES);
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //rotate(angle)
      //translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("red");
      rect(pos.x,pos.y, this.width, this.height);
      pop();
    }
  };