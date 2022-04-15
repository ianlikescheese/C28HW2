class board{
  constructor(x, y, width, height, boardPos){
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height)
    this.height = height
    this.width = width
    this.image = loadImage("assets/board.png")
    World.add(world,this.body)

    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
