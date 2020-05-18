class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
      this.height = height;
      this.image= loadImage("assets/canon.png")
    };

    display(){
      var pos =this.body.position;
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      
     // rectMode(CENTER);
      //fill("blue");
     // rect(pos.x, pos.y, this.width, this.height);
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    };
}
