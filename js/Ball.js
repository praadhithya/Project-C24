class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  display() {
      circle(this.x,this.y,this.radius);
  }
}
