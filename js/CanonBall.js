class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
      }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image= loadImage("asset/cononBall.png")
  };

  display(){
      circle(this.x,this.y,this.radius);

  }
};
